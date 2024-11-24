// Context imports
import { MapEventsProvider } from './events';

export const MapsProvider = ({ children }: any) => {
	return (
		<MapEventsProvider>
			{children}
		</MapEventsProvider>
	)
}

MapsProvider.displayName="MapsProvider";