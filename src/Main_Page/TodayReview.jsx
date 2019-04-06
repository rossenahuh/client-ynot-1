import React, { Component } from 'react';
import './TodayReview.css';
import StarRatingComponent from 'react-star-rating-component';

class TodayReview extends Component {
	constructor() {
		super();
		this.state = {
			restaurant: null
		};
	}

	conponentDidMount() {
		fetch(`http://localhost:3002/api/restaurants?infoabout?id=${this.props.reviewOfTheDay[0].restaurantID}`)
			.then((res) => res.json())
			.then((json) => {
				this.setState({ restaurant: json });
			});
	}

	render() {
		console.log(this.state.restaurantID);
		const { reviewOfTheDay } = this.props;
		console.log('reviewOfTheDay:::: ', reviewOfTheDay);
		return (
			<div className="TR-container">
				<h5>Review of the Day</h5>
				<div className="TR-wrap">
					<div className="TR-title-wrap">
						<img
							className="TR-img"
							src={reviewOfTheDay[0].user.profilePhoto}
							alt={reviewOfTheDay[0].user.name}
						/>
						<span>
							<div className="TR-context-highlight">{reviewOfTheDay[0].user.name}</div>
							<div>
								<span>Wrote a review for </span>
								<span className="TR-context-highlight">{reviewOfTheDay[0].restaurant.name} </span>
							</div>
						</span>
					</div>
					<div className="TR-slogan">
						<span className="margin-left">REVIEW OF THE DAY!</span>
					</div>
					<div className="TR-rating">
						<StarRatingComponent editing={false} starCount={5} value={reviewOfTheDay[0].rating} />
						<span className="TR-date">{reviewOfTheDay[0].createdAt.slice(0, 10)}</span>
					</div>
					<div>{reviewOfTheDay[0].comment}</div>
				</div>
			</div>
		);
	}
}

export default TodayReview;
