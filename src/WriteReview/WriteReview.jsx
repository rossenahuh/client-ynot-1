import React, { Component } from 'react';

class Reviews extends Component {
	state = {
		text: ''
	};

	onSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
		this.sendReview(this.state.text);
	};

	sendReview(text) {
		const data = {
			id: 1,
			userID: 1,
			restaurantID: 1,
			comment: text,
			rating: 5
		};

		fetch('http://localhost:3002/api/reviews', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}

	render() {
		const { history, match } = this.props;
		console.log(this.props);
		return (
			<form>
				<input
					placeholder="write your review"
					value={this.state.text}
					onChange={(e) => {
						this.setState({ text: e.target.value });
					}}
				/>
				<button
					onClick={(e) => {
						this.onSubmit(e);
						history.push(`/info/${match.params.restaurantID}`);
					}}
				>
					Post Review
				</button>
			</form>
		);
	}
}

export default Reviews;
