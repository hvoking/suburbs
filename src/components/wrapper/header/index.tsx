// App imports
import './styles.scss';

export const Header = () => {
	return (
		<div className="header-wrapper">
			<div></div>
			<img 
				className="logo-wrapper"
				src={process.env.PUBLIC_URL + '/static/logos/logo.png'}
				alt="logo-leverage" 
			/>
			<div></div>
		</div>
	)
}

Header.displayName="Header";