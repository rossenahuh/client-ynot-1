import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonGroup, Button } from 'reactstrap';
import { Icon } from 'react-icons-kit';
import { search } from 'react-icons-kit/icomoon/search';
import './Search.css';

function Search({ onChange, onClick, onKeyPress, searchInput }) {
	return (
		<ButtonGroup>
			<input onChange={onChange} onKeyPress={onKeyPress} placeholder=" Near" />

			<Link to={`/search/${searchInput}`}>
				<Button className="search-button" color="danger" onClick={onClick}>
					<Icon icon={search} />
				</Button>
			</Link>
		</ButtonGroup>
	);
}

export default Search;
