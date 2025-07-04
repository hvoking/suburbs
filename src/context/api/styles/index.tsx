// React imports
import { useContext, createContext } from 'react';

const StylesContext: React.Context<any> = createContext(null)

export const useStyles = () => {
	return (
		useContext(StylesContext)
	)
}

export const StylesProvider = ({children}: any) => {
	const fetchData = async (tableSchema: string, tableName: string) => {
		const url = `
	    	${process.env.REACT_APP_API_URL}/
	    	style
	    	?table_schema=${tableSchema}
	    	&table_name=${tableName}
	    `.replace(/\s/g, '');
	    try {
		  	const res = await fetch(url);
		  	if (!res.ok) {
		  		throw new Error(`HTTP error! status: ${res.status}`);
		  	}
		    const receivedData = await res.json();
		    return receivedData;
	    }
	    catch (error) {
	    	console.error("Error fetching address:", error);
	    	return null;
	    }
	}

	const getTilesUrl = (tableSchema: string, tableName: string) => {
		const url = `
	    	${process.env.REACT_APP_API_URL}
	    	/tiles
	    	?table_schema=${tableSchema}
	    	&table_name=${tableName}
	    	&x={x}
	    	&y={y}
	    	&z={z}
	    `.replace(/\s/g, '');
	    return url
	}

	return (
		<StylesContext.Provider value={{ fetchData, getTilesUrl }}>
			{children}
		</StylesContext.Provider>
	)
}

StylesContext.displayName = "StylesContext";