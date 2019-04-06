import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import './RestaurantsInfo.css';
import StarRatingComponent from 'react-star-rating-component';

class RestaurantsInfo extends Component {
	constructor() {
		super();
		this.state = {
			popoverOpen: false
		};

		this._popToggle = this._popToggle.bind(this);
	}
	_popToggle() {
		this.setState({
			popoverOpen: !this.state.popoverOpen
		});
	}

	render() {
		console.log('current::: ', this.props.current);
		return this.props.current.map((restaurant, index) => (
			<Card sm="4">
				<CardImg className="RI-card-img" src={restaurant.src} alt={restaurant.name} />
				<CardBody>
					<CardTitle className="RI-card-title">{restaurant.name}</CardTitle>
					<CardSubtitle className="RI-card-subtitle">
						<StarRatingComponent editing={false} starCount={5} value={restaurant.averageRating} />
						<span className="RI-review-number">{` ${restaurant.numberOfReviews} review`}</span>
					</CardSubtitle>
					<CardText className="RI-card-text">{restaurant.address} </CardText>
				</CardBody>
			</Card>
		));
	}
}

export default RestaurantsInfo;
