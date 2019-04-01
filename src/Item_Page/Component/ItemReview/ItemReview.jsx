import React, { Component } from 'react';
import ItemReviewDetails from '../ItemReviewDetails';
import './ItemReview.css';

class ItemReview extends Component {
	constructor() {
		super();
		this.state = {
			resData: null,
			revData: null
		};
	}

	componentDidMount() {
		this.fetchAllRestaurant();
		this.getReviews();
	}

	fetchAllRestaurant() {
		fetch(`http://localhost:3000/restaurants`).then((res) => res.json()).then((json) => {
			this.setState({
				resData: json
			});
		});
	}

	getReviews() {
		fetch(`http://localhost:3000/reviews?restaurantID=2`).then((res) => res.json()).then((json) => {
			this.setState({
				revData: json
			});
			console.log(this.state.revData);
		});
	}

	render() {
		return (
			<div>
				{this.state.revData !== null ? (
					this.state.revData.map((review) => <ItemReviewDetails review={review} />)
				) : null}
			</div>
		);
	}
}

export default ItemReview;
