import React, { Component } from 'react';
import { Col, Row, Container, Button, Link } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import WrtieReviewHeader from './WriteReviewHeader';
import StarRatingComponent from 'react-star-rating-component';

export class WriteReview extends Component {
	constructor(props) {
		super(props);

		this.state = {
			comment: '',
			info: null,
			rating: 0,
			file: '',
			imageUrl: ''
		};

		this._fetchRestaurantInfo = this._fetchRestaurantInfo.bind(this);
		this._changeComment = this._changeComment.bind(this);
		this._postReview = this._postReview.bind(this);
		this._onStarClick = this._onStarClick.bind(this);
		this._handleImageChange = this._handleImageChange.bind(this);
		this.fileInput = React.createRef();
	}

	componentDidMount() {
		const restaurantID = this.props.match.params.restaurantID;
		this._fetchRestaurantInfo(restaurantID);
	}

	_fetchRestaurantInfo(id) {
		fetch(`http://localhost:3002/api/restaurants/infoabout?restaurantID=${id}`)
			.then((res) => res.json())
			.then((json) =>
				this.setState({
					info: json
				})
			);
	}

	_changeComment(e) {
		e.preventDefault();
		this.setState({
			comment: e.target.value
		});
	}

	_postReview() {
		const data = {
			userID: 1,
			restaurantID: this.props.match.params.restaurantID,
			comment: this.state.comment,
			rating: this.state.rating,
			photo: 'https://media-cdn.tripadvisor.com/media/photo-s/11/a3/8e/03/caption.jpg'
		};

		fetch('http://localhost:3002/api/reviews', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		console.log('file::: ', this.fileInput.current.files[0].name);
		console.log('imgURL::: ', this.state.imageUrl);
		// this.props.history.push(`/info/${this.props.match.params.restaurantID}`);
	}

	_onStarClick(nextValue, prevValue, name) {
		this.setState({ rating: nextValue });
	}

	_handleImageChange(e) {
		e.preventDefault();

		let reader = new FileReader();
		let file = e.target.files[0];

		reader.onloadend = () => {
			this.setState({
				file: file,
				imageUrl: reader.result
			});
		};

		reader.readAsDataURL(file);
	}

	render() {
		const { info, rating, imageUrl } = this.state;
		return info ? (
			<Container>
				<WrtieReviewHeader />
				{/* <Link to={`/info/${info.id}`}> */}
				<h2>{info.name}</h2>
				{/* </Link> */}
				<Col>
					<Row>
						<StarRatingComponent
							name="rate1"
							starCount={5}
							value={rating}
							onStarClick={this._onStarClick}
						/>
						<div>Select your rating</div>
					</Row>
					<input onChange={this._changeComment} placeholder="write your comments" />
					<input type="file" ref={this.fileInput} onChange={this._handleImageChange} />
					<Button onClick={this._postReview} color="danger">
						Post Review
					</Button>
				</Col>
			</Container>
		) : (
			'loading..'
		);
	}
}

export default WriteReview;
