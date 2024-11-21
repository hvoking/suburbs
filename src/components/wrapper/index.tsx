// App imports
import { Header } from './header';
import { Search } from './search';
import './styles.scss';

let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	window.addEventListener('resize', () => {
	  let vh = window.innerHeight * 0.01;
	  document.documentElement.style.setProperty('--vh', `${vh}px`);
	});

export const Wrapper = ({ children }: any) => {
	return (
		<div className="wrapper">
			<Header/>
			<div className="map-wrapper">
				<Search/>
				{children}
			</div>
		</div>
	)
}

Wrapper.displayName="Wrapper";