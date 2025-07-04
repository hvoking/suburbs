// React imports
import { useState, useRef } from 'react';

// App imports
import { Suggestions } from './suggestions';
import { SearchIcon } from './icon';
import { Cross } from './cross';
import './styles.scss';

// Context imports
import { suburbs } from 'context/info/suburbs';

export const Search = () => {
	const inputRef = useRef<any>(null);
	
	const [ searchText, setSearchText ] = useState<any>("");
	const [ suggestions, setSuggestions ] = useState<any>([]);

	const [ suggestionIndex, setSuggestionIndex ] = useState(0);
	const [ suggestionsActive, setSuggestionsActive ]= useState(false);

	const handleChange = (e: any) => {
		const query = e.target.value.toLowerCase();
		setSearchText(query);
		if (query.length > 0) {
			const filterSuggestions: any = Object.keys(suburbs).filter((suggestion: any) => 
				{
					const currentSuggestion = suggestion.toLowerCase().normalize("NFD");
					return currentSuggestion.indexOf(query) > -1
				}
			)
			setSuggestions(filterSuggestions);
			setSuggestionsActive(true);
		}
		else {
			setSuggestionsActive(false)
		}
	};

	const handleKeyDown = (e: any) => {
		// up arrow
		if (e.keyCode === 38) {
			if (suggestionIndex === 0) {
				return;
			}
			setSuggestionIndex(suggestionIndex - 1);
		}
		// down arrow
		else if (e.keyCode === 40) {
			if (suggestionIndex - 1 === suggestions.length) {
				return
			}
			setSuggestionIndex(suggestionIndex + 1);
		}
		// enter
		else if (e.keyCode === 13) {
			const cityValue: string = suggestions[suggestionIndex]
			setSearchText(cityValue);
			setSuggestionIndex(0);
			setSuggestionsActive(false);
		}
		// escape
		else if (e.keyCode === 27) {
			setSearchText("");
			setSuggestionIndex(0);
			setSuggestionsActive(false);
		}
	};

	const cleanSuggestions = () => {
		setSearchText("");
		setSuggestionIndex(0);
		setSuggestionsActive(false);
	}

	const handleClick = (e: any, suggestion: any) => {
		setSuggestions([]);
		setSearchText(suggestion)
		
		setSuggestionsActive(false)

	};

	return (
		<div className="world-search-wrapper">
			<div className="world-search">
				<SearchIcon/>
				<input 
					ref={inputRef}
					className="world-search-input"
					type="text" 
					placeholder="Search suburbs"
					value={searchText}
					onChange={handleChange}
					onKeyDown={handleKeyDown}
					spellCheck={false}
				/>
				<Cross cleanSuggestions={cleanSuggestions}/>
				{suggestionsActive && suggestions &&
					<Suggestions 
						suggestions={suggestions}
						suggestionIndex={suggestionIndex} 
						setSuggestionIndex={setSuggestionIndex} 
						handleClick={handleClick}
					/>
				}
			</div>
		</div>
	)
}

Search.displayName="Search";