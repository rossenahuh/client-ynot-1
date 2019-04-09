import React, { Component } from 'react';
import LocationRecommendation from './LocationRecommendation';
import TodayReview from './TodayReview';
import RecentActivity from './RecentActivity';
import Search from './Search';
import Footer from './Footer';
import configs from '../config/config.json';
import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	Button,
	ButtonGroup,
	Container,
	Row,
	Col,
	CardColumns,
	Spinner,
	Modal,
	Form,
	FormGroup,
	Label,
	Input,
	ModalHeader,
	ModalBody,
	ModalFooter
} from 'reactstrap';

const GOOGLEMAPAPIKEY = configs.GOOGLEMAPAPIKEY;
class Main extends Component {
	constructor() {
		super();

		this.state = {
			reviewOfTheDay: null,
			recentActivityList: null,
			searchInput: null,
			searchResult: null,
			error: null,
			currentLoc: null,
			loginModalOpen: false
		};
		this._fetchMatchingDataToSearchInput = this._fetchMatchingDataToSearchInput.bind(this);
		this._triggerFetchWithClick = this._triggerFetchWithClick.bind(this);
		this._loginModalToggle = this._loginModalToggle.bind(this);
	}

	componentDidMount() {
		this._getTodayReview();
		this._getTop9RecentActivities();
		this._triggerFetchRestaurantsNearby();
	}

	_loginModalToggle() {
		this.setState((prevState) => ({
			loginModalOpen: !prevState.loginModalOpen
		}));
	}

	_getTop9RecentActivities() {
		fetch('http://localhost:3002/api/activities/recentlyCreated').then((res) => res.json()).then((json) => {
			this.setState({
				recentActivityList: json
			});
		});
	}

	_getTodayReview() {
		fetch(`http://localhost:3002/api/reviews/reviewoftheday`).then((res) => res.json()).then((json) => {
			this.setState({
				reviewOfTheDay: [ json ]
			});
		});
	}

	_updateSearchInput(e) {
		this.setState({
			searchInput: e.target.value
		});
	}

	_fetchMatchingDataToSearchInput() {
		let location = this.state.searchInput;
		fetch(`http://localhost:3002/api/restaurants?district=${location}`).then((res) => res.json()).then((json) => {
			this.setState({
				searchResult: json
			});
		});
	}
	_triggerFetchWithClick() {
		this._fetchMatchingDataToSearchInput();
	}
	_triggerFetchWithEnter(e) {
		// console.log(e.key);
		const { history } = this.props;
		if (e.key === 'Enter') {
			history.push(`/search/${this.state.searchInput}`);
		}
	}

	_getAddressOfCurrentLocation(lat, lon) {
		fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${GOOGLEMAPAPIKEY}`)
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					currentLoc: json.results[0].formatted_address.slice(11, 13)
				});
			});
	}
	_triggerFetchRestaurantsNearby = () => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				// console.log(position);

				this._getAddressOfCurrentLocation(position.coords.latitude, position.coords.longitude);
			},
			(error) => this.setState({ error: error })
		);
	};
	render() {
		const { reviewOfTheDay, recentActivityList, searchResult, currentLoc, loginModalOpen } = this.state;
		const { history } = this.props;
		return reviewOfTheDay && recentActivityList ? (
			<Container className="Main-container" fluid>
				<Col className="Main-Nav">
					<Col className="Main-login-Bar">
						<Row>
							<Col className="Main-nav-menu">Review</Col>
							<Col className="Main-nav-menu">Event</Col>
							<Col className="Main-nav-menu">Talk</Col>
						</Row>
						<Row>
							<ButtonGroup>
								<Button size="sm" onClick={this._loginModalToggle} color="danger">
									Log In
								</Button>
								<Button size="sm" color="danger">
									Sign Up
								</Button>
							</ButtonGroup>
							<Modal isOpen={loginModalOpen} toggle={this._loginModalToggle}>
								<ModalHeader>Log In</ModalHeader>
								<ModalBody>
									<Form>
										<FormGroup>
											<Label for="exampleEmail">Email</Label>
											<Input
												type="email"
												name="email"
												id="exampleEmail"
												placeholder="yelp-seoul@gamil.com"
											/>
										</FormGroup>
										<FormGroup>
											<Label for="examplePassword">Password</Label>
											<Input
												type="password"
												name="password"
												id="examplePassword"
												placeholder="password placeholder"
											/>
										</FormGroup>
									</Form>
								</ModalBody>
								<ModalFooter>
									<Button color="danger" onClick={this.toggle}>
										Log In
									</Button>{' '}
									<Button color="secondary" onClick={this.toggle}>
										Cancel
									</Button>
								</ModalFooter>
							</Modal>
						</Row>
					</Col>
					<Col className="Main-logo">
						<img
							src="https://s3-media2.fl.yelpcdn.com/assets/srv0/styleguide/1ea40efd80f5/assets/img/brand_guidelines/yelp_fullcolor.png"
							alt="yelp logo"
						/>
					</Col>
					<Col className="Main-SearchBar">
						<Search
							onChange={(e) => this._updateSearchInput(e)}
							onClick={this._triggerFetchWithClick}
							onKeyPress={(e) => this._triggerFetchWithEnter(e)}
							searchInput={this.state.searchInput}
						/>{' '}
						<Button
							color="danger"
							onClick={() => {
								this._triggerFetchRestaurantsNearby();
								history.push(`/search/${currentLoc}`);
							}}
						>
							Current Location
						</Button>
					</Col>
				</Col>
				{searchResult ? (
					searchResult.map((restaurant) => (
						<Col>
							<span>
								<img src={restaurant.photo} alt={restaurant.name} />
							</span>
							<span>
								<div>{restaurant.name}</div>
								<div>별점</div>
								<div>comment::: {restaurant.reviewID}</div>
							</span>
						</Col>
					))
				) : null}
				<Col className="LR-wrapper">
					<LocationRecommendation />
				</Col>
				<Col>
					<TodayReview reviewOfTheDay={reviewOfTheDay} />
				</Col>
				<Col className="RA-wrapper">
					<h5>Recent Activities</h5>
					<CardColumns>
						<RecentActivity recentActivityList={recentActivityList} />
					</CardColumns>
				</Col>
				<Footer />
			</Container>
		) : (
			<div className="Spinner-wrap">
				<Spinner className="Main-Spinner" color="danger" />
			</div>
		);
	}
}

export default Main;
