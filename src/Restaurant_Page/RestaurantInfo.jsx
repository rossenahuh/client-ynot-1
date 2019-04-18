import React, { Component } from 'react';
import { Col, Row, Container, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../SearchResult_Page/Header';
import Footer from '../Main_Page/Footer';
import RecommendedReviews from './RecommendedReviews';
import RestaurantMap from './RestaurantMap';
import PhotoGroup from './PhotoGroup';
import StarRatingComponent from 'react-star-rating-component';
import './RestaurantInfo.css';

class RestaurantInfo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			current: null
		};

		this._HandleWriteReview = this._HandleWriteReview.bind(this);
	}

	_fetchRestaurantInfo(id) {
		fetch(`http://localhost:3002/api/restaurants/infoabout?restaurantID=${id}`)
			.then((res) => res.json())
			.then((json) =>
				this.setState({
					current: json
				})
			);
	}

	componentDidMount() {
		this._fetchRestaurantInfo(this.props.match.params.restaurantID);
	}

	_HandleWriteReview() {
		const restaurantID = this.state.current.id;
		this.props.history.push(`/writereview/${restaurantID}`);
	}
	render() {
		const { current } = this.state;
		const { history } = this.props;
		// var items = [];
		// if (this.state.current.reviewList.length) {
		// 	items = this.state.current.reviewList.reduce((acc, cur) => acc.push({ src: cur.photo }), []);
		// }

		console.log(current);
		return this.state.current ? (
			<Container className="container" fluid>
				<Header history={history} />
				<Col className="body-wrapper-full">
					<Row className="clearfix-title">
						<Col>
							<h2>{current.name}</h2>
							<Row>
								<StarRatingComponent editing={false} starCount={5} value={current.averageRating} />

								<div>{current.reviewNum} review</div>
							</Row>
						</Col>
						<Button onClick={this._HandleWriteReview}>Write review</Button>
						<Button>Add Photo</Button>
					</Row>
					<Row className="clearfix-subtitle">
						<Col>
							<RestaurantMap />
							<div>{current.address}</div>
							<div>{current.contact}</div>
						</Col>
						<Row>
							<PhotoGroup reviewList={current.reviewList} />
						</Row>
					</Row>
					<RecommendedReviews reviewList={current.reviewList} />
				</Col>
				<Footer />clearfix-subtitle
			</Container>
		) : (
			<div>loading...</div>
		);
	}
}

export default RestaurantInfo;
