// App imports
import { Maps } from './maps';
import { Wrapper } from './wrapper';
import './styles.scss';

export const Main = () => {
	return (
		<Wrapper>
			<Maps/>
		</Wrapper>
	)
}

Main.displayName="Main";