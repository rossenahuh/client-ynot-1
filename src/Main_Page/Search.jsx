import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonGroup, Button } from 'reactstrap';
import { Icon } from 'react-icons-kit';
import { search } from 'react-icons-kit/icomoon/search';
import './Search.css';

class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchInput: null
		};
	}

	_handleOnChange = (e) => {
		this.setState({
			searchInput: e.target.value
		});
	};

	_handleKeyPress = (e) => {
		const { history } = this.props;
		if (e.key === 'Enter') {
			history.push(`/search/${this.state.searchInput}`);
		}
	};

	_handleClick = () => {
		const history = this.props.history;
		history.push(`/search/${this.state.searchInput}`);
	};
	render() {
		const { searchInput } = this.state;
		return (
			<ButtonGroup>
				<input
					onChange={(e) => {
						this._handleOnChange(e);
					}}
					onKeyPress={(e) => {
						this._handleKeyPress(e);
					}}
					placeholder=" Near"
				/>

				<Link to={`/search/${searchInput}`}>
					<Button className="search-button" color="danger" onClick={() => this._handleClick}>
						<Icon icon={search} />
					</Button>
				</Link>
			</ButtonGroup>
		);
	}
}

export default Search;
