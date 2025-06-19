// React imports
import { useState, useEffect } from 'react';

// Context imports
import { useStyles } from 'context/api/styles';

// Third party imports
import { Source, Layer } from 'react-map-gl/mapbox';

export const Points = () => {
	const { fetchData, getTilesUrl } = useStyles();
	const [ styleData, setStyleData ] = useState<any[]>([]);

	const tableSchema = "leverage";
	const tableName = "centroids";
	
  	useEffect(() => {
    	const loadData = async () => {
			const data = await fetchData(tableSchema, tableName);
			setStyleData(data);
		}
		loadData();
	}, []);

	const url = getTilesUrl(tableSchema, tableName)

  	const layers = styleData.map((style: any, index: number) => {
		return (
			<Layer key={index} {...style}/>
		)
	});

	return (
		<Source 
			id="raster-style" 
			type="vector" 
			tiles={[ url ]}
		>
			{layers}
		</Source>
	)
}

Points.displayName="Points"