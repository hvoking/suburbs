// App imports
import { StylesProvider } from './styles';
import { GoogleApiProvider } from './google';

export const ApiProvider = ({children}: any) => {
  return (
    <GoogleApiProvider>
    <StylesProvider>
      {children}
    </StylesProvider>
    </GoogleApiProvider>
  )
}

ApiProvider.displayName="ApiProvider";