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
		this.getReviews();
	}

	getReviews() {
		fetch(`http://localhost:3002/api/restaurants/infoabout?id=${this.props.id}`)
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					revData: json
				});
				console.log(json);
			});
	}

	render() {
		const { revData } = this.state;
		console.log(revData);
		return (
			<div>{revData !== null ? [ revData ].map((review) => <ItemReviewDetails review={review} />) : null}</div>
		);
	}
}

export default ItemReview;
