// App imports
import { GeoProvider } from './geo';
import { ApiProvider } from './api';
import { InfoProvider } from './info';
import { MapsProvider } from './maps';

export const MainProvider = ({children}: any) => {
  return (
    <InfoProvider>
    <GeoProvider>
    <ApiProvider>
    <MapsProvider>
      {children}
    </MapsProvider>
    </ApiProvider>
    </GeoProvider>
    </InfoProvider>
  )
}

MainProvider.displayName="MainProvider";