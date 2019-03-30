import React from 'react';

function Search({ onChange }) {
	return (
		<div>
			<input onChange={onChange} />
			<button>Search</button>
		</div>
	);
}

export default Search;
