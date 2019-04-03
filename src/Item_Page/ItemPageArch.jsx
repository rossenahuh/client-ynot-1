import React, { Component } from 'react';
import ItemPage from './Component/ItemPage';
import Header from './Component/Header';
import Footer from './Component/Footer';

class ItemPageArch extends Component {
	render() {
		const { match } = this.props;
		console.log(match.params.itemId);
		return (
			<div className="">
				<Header />
				<ItemPage id={match.params.itemId} />
				<Footer />
			</div>
		);
	}
}

export default ItemPageArch;
