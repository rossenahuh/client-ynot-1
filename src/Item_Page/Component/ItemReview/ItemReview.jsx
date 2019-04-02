import React, { Component } from 'react';
import ItemReviewDetails from '../ItemReviewDetails';
import './ItemReview.css';

class ItemReview extends Component {
	constructor() {
		super();
		this.state = {
			revData: null
		};
	}

	componentDidMount() {
		this.getReviews(this.props.id);
	}

	getReviews(id) {
		fetch(`http://localhost:3000/reviews?restaurantID=${id}`).then((res) => res.json()).then((json) => {
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
