// Context imports
import { MapEventsProvider } from './events';
import { MaskProvider } from './mask';

export const MapsProvider = ({ children }: any) => {
	return (
		<MaskProvider>
		<MapEventsProvider>
			{children}
		</MapEventsProvider>
		</MaskProvider>
	)
}

MapsProvider.displayName="MapsProvider";