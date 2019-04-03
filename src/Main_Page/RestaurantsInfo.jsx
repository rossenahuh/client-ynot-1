import React from 'react';

function RestaurantsInfo({ current }) {
	console.log(current);
	return current.map((restaurant) => (
		<div>
			<img src={restaurant.src} alt={restaurant.name} />
			<div>{restaurant.name}</div>
			<div>별점</div>
			<div>{restaurant.address}</div>
		</div>
	));
}

export default RestaurantsInfo;
