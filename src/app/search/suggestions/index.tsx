// App imports
import './styles.scss';

export const Suggestions = ({ suggestions, suggestionIndex,	setSuggestionIndex, handleClick }: any) => {
	return (
		<ul className="world-search-suggestions">
			{
				suggestions.slice(0, 5).map((suggestion: any, index: number) => {
					return (
						<li 
							key={index} 
							onClick={(e: any) => handleClick(e, suggestion)}
							onMouseEnter={() => setSuggestionIndex(index)}
							onMouseLeave={() => setSuggestionIndex(null)}
							style={{
								borderRadius: "5px",
								backgroundColor: index === suggestionIndex ? 
								"rgba(223, 223, 223, 1)" : 
								"rgba(255, 255, 255, 1)"
							}}
						>
							<div className="world-current-suggestion">
								<img 
									src={process.env.PUBLIC_URL + '/static/maps/marker.svg'} 
									alt="pin" 
									width="15px" 
									style={{alignSelf: "center"}}
								/>
								<div>{suggestion}</div>
							</div>
						</li>
					)
				})
			}
		</ul>
	)
};

Suggestions.displayName="Suggestions";