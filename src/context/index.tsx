// App imports
import { GeoProvider } from './geo';
import { ApiProvider } from './api';
import { InfoProvider } from './info';

export const MainProvider = ({children}: any) => {
  return (
    <InfoProvider>
    <GeoProvider>
    <ApiProvider>
      {children}
    </ApiProvider>
    </GeoProvider>
    </InfoProvider>
  )
}

MainProvider.displayName="MainProvider";