// React imports
import { useState, useContext, createContext } from 'react';

const LimitsContext: React.Context<any> = createContext(null)

export const useLimits = () => {
	return (
		useContext(LimitsContext)
	)
}

export const LimitsProvider = ({children}: any) => {
	const [ activeGeometry, setActiveGeometry ] = useState<any>(null);

	return (
		<LimitsContext.Provider value={{ 
			activeGeometry, setActiveGeometry 
		}}>
			{children}
		</LimitsContext.Provider>
	)
}

LimitsContext.displayName = "LimitsContext";