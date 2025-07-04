// Context imports
import { useStyles } from 'context/api/styles';

// Third party imports
import { Source, Layer } from 'react-map-gl/mapbox';

export const Tiles = ({ currentId }: any) => {
	const { getTilesUrl } = useStyles();

	const tableSchema = "leverage";
	const tableName = "sa2";

	const url = getTilesUrl(tableSchema, tableName)

	const fillLayerStyle: any = {
	  id: "sa2-fill-layer",
	  type: "fill",
	  source: "sa2",
	  "source-layer": "default",
	  paint: {
	  	"fill-color": [
	  		"case",
	  		["==", ["get", "id"], currentId],
	  		"rgba(13, 81, 132, 0.4)",
	  		"rgba(126, 126, 132, 0)"
	  	],
	    "fill-outline-color": "rgba(126, 126, 132, 0.4)",
	  },
	}

	return (
		<Source 
			id="sa2" 
			type="vector" 
			tiles={[ url ]}
		>
			<Layer {...fillLayerStyle}/>
		</Source>
	)
}

Tiles.displayName="Tiles"