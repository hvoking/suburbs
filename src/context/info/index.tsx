// React imports
import { useState, useContext, createContext } from 'react';

const InfoContext: React.Context<any> = createContext(null)

export const useInfo = () => {
	return (
		useContext(InfoContext)
	)
}

export const InfoProvider = ({children}: any) => {
	const [ suggestions, setSuggestions ] = useState<any>(null);
	const [ popupInfo, setPopupInfo ] = useState<any>(null);
	const [ currentId, setCurrentId ] = useState<number | null>(null);
	const [ activeGeometry, setActiveGeometry ] = useState<any>(null);

	return (
		<InfoContext.Provider value={{
			suggestions, setSuggestions,
			popupInfo, setPopupInfo,
			currentId, setCurrentId,
			activeGeometry, setActiveGeometry
		}}>
			{children}
		</InfoContext.Provider>
	)
}

InfoContext.displayName = "InfoContext";