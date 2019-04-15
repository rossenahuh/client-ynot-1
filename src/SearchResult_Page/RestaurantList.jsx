import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RestaurantList.css';

class RestaurantList extends Component {
	constructor(props) {
		super(props);
		// console.log('restaurantListPRops::: ', props);

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
				<li key={index}>
					{' '}
					<Row key={restaurant.id}>
						<img className="img" src={restaurant.src} alt={restaurant.name} />
						<Col>
							<Row>
								<Col>1</Col>
								<Link to={`/info/${restaurant.id}`}>
									<Col>{restaurant.name}</Col>
								</Link>
								<Col>{restaurant.contact}</Col>
							</Row>
							<Row>
								<Col>{restaurant.averageRating}</Col>
								<Col>{restaurant.numberOfReviews}</Col>
								<Col>{restaurant.address}</Col>
							</Row>
							<Row>{restaurant.latestComment}</Row>
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
				<ul>{renderRes}</ul>
				<ul id="page-numbers">{renderPageNumbers}</ul>
			</div>
		) : (
			'loading...'
		);
	}
}

export default RestaurantList;
