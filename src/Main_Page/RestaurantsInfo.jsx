import React, { Component } from 'react';

class RestaurantsInfo extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		console.log(this.props.current);
		return this.props.current.map((restaurant, index) => (
			<div>
				<img src={restaurant.src} alt={restaurant.name} />
				<div>{restaurant.name}</div>
				<div>{restaurant.averageRating}</div>
				<div>{restaurant.address}</div>
			</div>
		));
	}
}

export default RestaurantsInfo;
