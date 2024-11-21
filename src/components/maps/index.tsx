// React imports
import { useState, useCallback } from 'react';

// App imports
import { Tiles } from './tiles';
import { CustomPopup } from './popup';
import { Points } from './points';
import './styles.scss';

// Context imports
import { useGeo } from 'context/geo';
import { useInfo } from 'context/info';

// Third-party imports
import { Map } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export const Maps = () => {
	const { viewport, mapRef, basemap } = useGeo();
	const { popupInfo, setPopupInfo } = useInfo();

	const [ currentId, setCurrentId ] = useState<number | null>(null);

	const onClick = useCallback((event: any) => {
		const features = mapRef.current?.queryRenderedFeatures(event.point, {
		    layers: ["sa2-fill-layer"],
		});

		if (features && features.length > 0) {
			const { lng, lat } = event.lngLat;
			const clickedProperties = features[0].properties;
			
			setCurrentId(clickedProperties.id);
			setPopupInfo({ 
				longitude: lng, 
				latitude: lat, 
				properties: clickedProperties 
			});
		} 
		else {
			setPopupInfo(null);
			setCurrentId(null);
		}
	}, []);

	return (
		<div className="map-wrapper">
			<Map
				ref={mapRef}
				initialViewState={viewport}
				mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} 
				mapStyle={basemap}
				preserveDrawingBuffer={true}
				onClick={onClick}
			>
				<Tiles currentId={currentId}/>
				{popupInfo && 
					<CustomPopup 
						popupInfo={popupInfo} 
						setPopupInfo={setPopupInfo}
					/>
				}
				<Points/>
			</Map>
		</div>
	)
}

Maps.displayName="Maps";