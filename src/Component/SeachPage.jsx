import React, { Component } from 'react';
import Searchbar from './Searchbar';
import CategoryList from './CategoryList';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import './SearchPage.css';

class SearchPage extends Component {
	render() {
		return (
			<div className="">
				<Header />
				<CategoryList />
				<Footer />
			</div>
		);
	}
}

export default SearchPage;
