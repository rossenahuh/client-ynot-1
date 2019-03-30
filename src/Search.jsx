import React from 'react';

function Search({ onChange, onClick, onKeyPress }) {
	return (
		<div>
			<input onChange={onChange} onKeyPress={onKeyPress} />
			<button onClick={onClick}>Search</button>
		</div>
	);
}

export default Search;
