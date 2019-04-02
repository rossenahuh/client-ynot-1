import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
		fetch('http://localhost:3000/reviews', {
			method: 'POST',
			body: JSON.stringify(text),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((res) => res.json())
			.then((response) => console.log('Success:', JSON.stringify(response)));
	}

	render() {
		return (
			<form>
				<input
					placeholder="write your review"
					value={this.state.text}
					onChange={(e) => {
						this.setState({ text: e.target.value });
					}}
				/>
				{/* <Link to={`/item/${props.id}`}> */}
				<button onClick={(e) => this.onSubmit(e)}>Post Review</button>
				{/* </Link> */}
			</form>
		);
	}
}

export default Reviews;
