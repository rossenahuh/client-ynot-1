import React, { Component } from 'react';

class RestaurantInfo extends Component {
	render() {
		const { match } = this.props;
		console.log(match);
		return (
			<div className="">
				<div id="headCon">{/* <Header /> */}</div>
				{/* <ItemPage id={match.params.itemId} /> */}
				{/* <Footer /> */}
			</div>
		);
	}
}

export default RestaurantInfo;
