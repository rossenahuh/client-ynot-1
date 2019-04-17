import React, { Component } from 'react';
import { Col, Row, Container, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import WrtieReviewHeader from './WriteReviewHeader';
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios';

export class WriteReview extends Component {
	constructor(props) {
		super(props);

		this.state = {
			comment: '',
			info: null,
			rating: 0,
			imgPath: null
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
			photo: this.state.imgPath
		};

		axios.post('http://localhost:3002/api/reviews', data).then((result) => {
			console.log(result);
		});
		this.props.history.push(`/info/${this.props.match.params.restaurantID}`);
	}

	_onStarClick(nextValue, prevValue, name) {
		this.setState({ rating: nextValue });
	}

	_handleImageChange(e) {
		e.preventDefault();
		let file = e.target.files[0];
		// console.log(file);
		let formData = new FormData();

		formData.append('myImage', file);

		axios.post('http://localhost:3002/api/reviews/upload', formData).then((result) => {
			console.log('result::: ', result);
			this.setState({
				imgPath: result.data
			});
		});
	}

	render() {
		const { info, rating } = this.state;
		return info ? (
			<Container>
				<WrtieReviewHeader />
				<Link to={`/info/${info.id}`}>
					<h2>{info.name}</h2>
				</Link>
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
					<input type="file" onChange={this._handleImageChange} name="myImage" />
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
