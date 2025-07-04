// React imports
import { useState } from 'react';

// App imports
import { Tiles } from './tiles';
import { CustomPopup } from './popup';
import { Points } from './points';
import { Mask } from './mask';

// Context imports
import { useGeo } from 'context/geo';
import { useInfo } from 'context/info';
import { useMapEvents } from 'context/maps/events';

// Third-party imports
import { Map } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';

export const Maps = () => {
	const [ isMapLoaded, setIsMapLoaded ] = useState(false);
	const { viewport, mapRef, mapStyle } = useGeo();
	const { popupInfo, setPopupInfo, currentId } = useInfo();

	const { onClick } = useMapEvents();

	const onLoad = () => setIsMapLoaded(true);

	return (
		<div className="map-wrapper">
			<Map
				ref={mapRef}
				initialViewState={viewport}
				mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} 
				mapStyle={mapStyle}
				preserveDrawingBuffer={true}
				onClick={onClick}
				onLoad={onLoad}
			>
				{isMapLoaded && <>
					<Tiles currentId={currentId}/>
					{popupInfo && 
						<CustomPopup 
							popupInfo={popupInfo} 
							setPopupInfo={setPopupInfo}
						/>
					}
					<Points/>
					<Mask/>
				</>}
			</Map>
		</div>
	)
}

Maps.displayName="Maps";