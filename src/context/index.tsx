// App imports
import { GeoProvider } from './geo';
import { ApiProvider } from './api';
import { InfoProvider } from './info';
import { LimitsProvider } from './limits';
import { MaskProvider } from './mask';
import { MapsProvider } from './maps';

export const MainProvider = ({children}: any) => {
  return (
    <InfoProvider>
    <GeoProvider>
    <ApiProvider>
    <LimitsProvider>
    <MaskProvider>
    <MapsProvider>
      {children}
    </MapsProvider>
    </MaskProvider>
    </LimitsProvider>
    </ApiProvider>
    </GeoProvider>
    </InfoProvider>
  )
}

MainProvider.displayName="MainProvider";