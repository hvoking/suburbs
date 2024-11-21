// App imports
import { Description } from './description';
import './styles.scss';

// Third-party imports
import { Popup } from 'react-map-gl';

export const CustomPopup: any = ({ popupInfo, setPopupInfo }: any) => {
  const { longitude, latitude, properties } = popupInfo;

  const onClose = () => setPopupInfo(null);

  return (
    <Popup
      longitude={longitude}
      latitude={latitude}
      closeOnClick={false}
      onClose={onClose}
      offset={20}
    >
        <Description info={properties}/>
    </Popup>
  )
}

CustomPopup.diplayName="CustomPopup";