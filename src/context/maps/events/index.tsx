// React imports
import { useCallback, useContext, createContext } from 'react';

// App imports
import { useGeo } from 'context/geo';
import { useInfo } from 'context/info';
import { useLimits } from 'context/limits';

const MapEventsContext: React.Context<any> = createContext(null);

export const useMapEvents = () => {
	return (
		useContext(MapEventsContext)
	)
}

export const MapEventsProvider = ({children}: any) => {
	const { mapRef } = useGeo();
	const { setPopupInfo, setCurrentId } = useInfo();
	const { setActiveGeometry } = useLimits();

	const onClick = useCallback((event: any) => {
		const features = mapRef.current?.queryRenderedFeatures(event.point, {
		    layers: ["sa2-fill-layer"],
		});

		if (features && features.length > 0) {
			const { lng, lat } = event.lngLat;
			const clickedProperties = features[0].properties;
			const clickedId = clickedProperties.id;
			
			setCurrentId(clickedId);
			setPopupInfo({ 
				longitude: lng, 
				latitude: lat, 
				properties: clickedProperties 
			});
			setActiveGeometry(features[0].geometry)
		} 
		else {
			setPopupInfo(null);
			setCurrentId(null);
		}
	}, []);
		

	return (
		<MapEventsContext.Provider value={{
			onClick
		}}>
			{children}
		</MapEventsContext.Provider>
	)
}

MapEventsContext.displayName = "MapEventsContext";