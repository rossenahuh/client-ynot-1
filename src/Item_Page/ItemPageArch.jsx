import React, { Component } from 'react';
import ItemPage from './Component/ItemPage';
import Header from './Component/Header';
import Footer from './Component/Footer';

class ItemPageArch extends Component {
	render() {
		return (
			<div className="">
				<Header />
				<ItemPage />
				<Footer />
			</div>
		);
	}
}

export default ItemPageArch;
