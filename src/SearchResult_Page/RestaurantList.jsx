import React, { Component } from 'react';
import { Row, Col, Spinner } from 'reactstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RestaurantList.css';
import StarRatingComponent from 'react-star-rating-component';

class RestaurantList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentList: [],
			currentPage: 1,
			restaurantsPerpage: 5
		};

		this._fetchRestaurantList = this._fetchRestaurantList.bind(this);
		this._handleClick = this._handleClick.bind(this);
	}

	_handleClick(e) {
		this.setState({
			currentPage: Number(e.target.id)
		});
	}

	_fetchRestaurantList(location) {
		fetch(`http://localhost:3002/api/restaurants/nearby?district=${location}`)
			.then((res) => res.json())
			.then((json) =>
				this.setState({
					currentList: json
				})
			);
	}

	componentDidMount() {
		const { location } = this.props;
		this._fetchRestaurantList(location);
	}

	componentDidUpdate(prevProps) {
		// Typical usage (don't forget to compare props):
		if (this.props.location !== prevProps.location) {
			this._fetchRestaurantList(this.props.location);
		}
	}

	render() {
		const { currentList, currentPage, restaurantsPerpage } = this.state;

		// Logic for displaying todos
		const indexOfLastRes = currentPage * restaurantsPerpage;
		const indexOfFirstRes = indexOfLastRes - restaurantsPerpage;
		const currentRes = currentList.slice(indexOfFirstRes, indexOfLastRes);

		const renderRes = currentRes.map((restaurant, index) => {
			return (
				<li className="restaurant-wrapper" key={index}>
					{' '}
					<Row className="restaurant-content-wrapper" key={restaurant.id}>
						<Col className="padding-zero" xs="4">
							<img className="img" src={restaurant.src} alt={restaurant.name} />
						</Col>
						<Col xs="8">
							<Row>
								<Link to={`/info/${restaurant.id}`}>
									<Col className="restaurant-name text-align-left padding-zero">
										{restaurant.name}
									</Col>
								</Link>
								<Col className="text-align-right padding-zero">{restaurant.contact}</Col>
							</Row>
							<Row>
								<StarRatingComponent editing={false} starCount={5} value={restaurant.averageRating} />
								<Col className="review-number">{restaurant.numberOfReviews} review</Col>

								<Col className="text-align-right padding-zero">{restaurant.address}</Col>
							</Row>
							<Row className="comment">{restaurant.latestComment}</Row>
						</Col>
					</Row>
				</li>
			);
		});

		// Logic for displaying todos
		const pageNumbers = [];
		for (let i = 1; i <= Math.ceil(currentList.length / restaurantsPerpage); i++) {
			pageNumbers.push(i);
		}

		const renderPageNumbers = pageNumbers.map((number) => {
			return (
				<li key={number} id={number} onClick={this._handleClick}>
					{number}
				</li>
			);
		});
		// console.log('current restaurant list::: ', currentList);
		return currentList.length ? (
			<div>
				<ul className="padding-zero">{renderRes}</ul>
				<Row className="pagination padding-zero">
					<div>
						Page {currentPage} of {pageNumbers.length}
					</div>
					<ul id="page-numbers">{renderPageNumbers}</ul>
				</Row>
			</div>
		) : (
			<Spinner color="danger" />
		);
	}
}

export default RestaurantList;
