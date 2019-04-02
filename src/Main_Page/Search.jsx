import React from 'react';
import { Link } from 'react-router-dom';

function Search({ onChange, onClick, onKeyPress, searchInput }) {
	return (
		<div>
			<input onChange={onChange} onKeyPress={onKeyPress} />
			<Link to={`/search/${searchInput}`}>
				<button onClick={onClick}>Search</button>
			</Link>
		</div>
	);
}

export default Search;
