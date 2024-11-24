// App imports
import { Tiles } from './tiles';
import { CustomPopup } from './popup';
import { Points } from './points';
import { Mask } from './mask';
import { Wrapper } from './wrapper';
import './styles.scss';

// Context imports
import { useGeo } from 'context/geo';
import { useInfo } from 'context/info';
import { useMapEvents } from 'context/maps/events';

// Third-party imports
import { Map } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export const Main = () => {
	const { viewport, mapRef, basemap } = useGeo();
	const { popupInfo, setPopupInfo, currentId } = useInfo();

	const { onClick } = useMapEvents();

	return (
		<Wrapper>
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
					<Mask/>
				</Map>
			</div>
		</Wrapper>
	)
}

Main.displayName="Main";