import React, { Component } from 'react';
import LocationRecommendation from './LocationRecommendation';
import TodayReview from './TodayReview';
import RecentActivity from './RecentActivity';
import Search from './Search';
import Footer from './Footer';
import LoginButton from './LoginBotton';
import SignupButton from './SignupBotton';
import LoginSignupBotton from './LoginSignupButton';
import configs from '../config/config.json';
import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col, CardColumns, Spinner } from 'reactstrap';

const GOOGLEMAPAPIKEY = configs.GOOGLEMAPAPIKEY;
class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			reviewOfTheDay: null,
			recentActivityList: null,
			error: null,
			currentLoc: null
		};
	}

	componentDidMount() {
		this._getTodayReview();
		this._getTop9RecentActivities();
		this._triggerFetchRestaurantsNearby();
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
		const { reviewOfTheDay, recentActivityList, currentLoc } = this.state;
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
						<LoginSignupBotton history={history} />
					</Col>
					<Col className="Main-logo">
						<img
							src="https://s3-media2.fl.yelpcdn.com/assets/srv0/styleguide/1ea40efd80f5/assets/img/brand_guidelines/yelp_fullcolor.png"
							alt="yelp logo"
						/>
					</Col>
					<Col className="Main-SearchBar">
						<Search history={history} />{' '}
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
