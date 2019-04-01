import React, { Component } from 'react';
import StarRating from '../StarRating';
import './ItemReviewDetails.css';

class ItemReviewDetails extends Component {
	render() {
		return (
			<div className="review">
				<div>
					<img />
					<div>
						<span>{this.props.review.id}</span>
						<span>userlocation</span>
					</div>
				</div>
				<div>
					<StarRating />
					<span>{this.props.review.date}</span>
					<p>{this.props.review.comment}</p>
					<div>
						<button>Useful</button>
						<button>Funny</button>
						<button>Cool</button>
					</div>
				</div>
			</div>
		);
	}
}

export default ItemReviewDetails;
