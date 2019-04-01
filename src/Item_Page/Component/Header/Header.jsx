import React, { Component } from 'react';
import Searchbar from '../Searchbar';
import './Header.css';

export default class Header extends Component {
	render() {
		return (
			<div className="headerWrapper">
				<img src="https://www.yelpblog.com/wp-content/uploads/2018/08/logo.png" />
				<Searchbar />
				<button>Log In</button>
				<button>Sign Up</button>
			</div>
		);
	}
}
