import React, { Component } from 'react';

class TodayReview extends Component {
	constructor() {
		super();
		this.state = {
			restaurant: null
		};
	}

	conponentDidMount() {
		fetch(`http://localhost:3002/api/restaurants?infoabout?id==${this.props.reviewOfTheDay[0].restaurantID}`)
			.then((res) => res.json())
			.then((json) => {
				this.setState({ restaurant: json });
			});
	}

	render() {
		console.log(this.state.restaurantID);
		const { reviewOfTheDay } = this.props;
		const { restaurant } = this.state;
		return (
			<div>
				<div>
					<img src={reviewOfTheDay[0].photo} />
				</div>
				<div>{reviewOfTheDay[0].user.name}</div>
				<div>
					<span>Wrote a review for </span>
					<a href="#">restaurant.restaurant.name</a>
				</div>
				<div>REVIEW OF THE DAY!</div>
				<div>
					<span>{reviewOfTheDay[0].rating}</span>
					<span>{reviewOfTheDay[0].updatedAt}</span>
				</div>
				<div>{reviewOfTheDay[0].comment}</div>
			</div>
		);
	}
}

export default TodayReview;
