// App imports
import { GeoProvider } from './geo';
import { ApiProvider } from './api';
import { InfoProvider } from './info';
import { MapsProvider } from './maps';

export const ContextProvider = ({children}: any) => {
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

ContextProvider.displayName="ContextProvider";