import React, { Component } from 'react';
import LocationRecommendation from './LocationRecommendation';
import TodayReview from '../TodayReview';
import RecentActivity from './RecentActivity';
import Search from './Search';

const GOOGLEMAPAPIKEY = 'AIzaSyBCXHmnzN86txpvCJnC6Z5h_-DUiBRVYgE';
class Main extends Component {
	constructor() {
		super();

		this.state = {
			reviewOfTheDay: null,
			recentActivityList: null,
			searchInput: null,
			searchResult: null,
			error: null
		};
		this._fetchMatchingDataToSearchInput = this._fetchMatchingDataToSearchInput.bind(this);
		this._triggerFetchWithClick = this._triggerFetchWithClick.bind(this);
	}

	componentDidMount() {
		this._getTodayReview();
		this._getTop9RecentActivities();
	}

	_getTop9RecentActivities() {
		fetch('http://localhost:3000/reviews').then((res) => res.json()).then((json) => {
			let top9Latest = json.reverse().slice(0, 9);
			this.setState({
				recentActivityList: top9Latest
			});
		});
	}

	_getTodayReview() {
		let date = new Date().toISOString().slice(0, 10);
		fetch(`http://localhost:3000/reviews?date=${date}`).then((res) => res.json()).then((json) => {
			let result = json.reduce(this._pickTheReviewOfTheDay);
			console.log(result);
			this.setState({
				reviewOfTheDay: result
			});
		});
	}

	_pickTheReviewOfTheDay(acc, cur) {
		if (acc.rating > cur.rating) {
			return acc;
		} else if (acc.rating === cur.rating) {
			return acc.comment.length > cur.comment.length ? acc : cur;
		} else {
			return cur;
		}
	}

	_updateSearchInput(e) {
		this.setState({
			searchInput: e.target.value
		});
	}

	_fetchMatchingDataToSearchInput() {
		let location = this.state.searchInput;
		fetch(`http://localhost:3000/restaurants?location=${location}`).then((res) => res.json()).then((json) => {
			this.setState({
				searchResult: json
			});
		});
	}
	_triggerFetchWithClick() {
		this._fetchMatchingDataToSearchInput();
	}
	_triggerFetchWithEnter(e) {
		if (e.key === 'Enter') {
			this._fetchMatchingDataToSearchInput();
		}
	}
	_fetchMatchingDataToSearchInput2(location) {
		fetch(`http://localhost:3000/restaurants?location=${location}`).then((res) => res.json()).then((json) => {
			this.setState({
				searchResult: json
			});
		});
	}

	_getAddressOfCurrentLocation(lat, lon) {
		fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${GOOGLEMAPAPIKEY}`)
			.then((res) => res.json())
			.then((json) =>
				this._fetchMatchingDataToSearchInput2(json.plus_code.compound_code.split(' ')[2].slice(0, 2))
			);
	}
	_triggerFetchRestaurantsNearby = () => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				console.log(position);

				this._getAddressOfCurrentLocation(position.coords.latitude, position.coords.longitude);
			},
			(error) => this.setState({ error: error })
		);
	};
	render() {
		const { reviewOfTheDay, recentActivityList, searchResult } = this.state;
		return reviewOfTheDay && recentActivityList ? (
			<div>
				<header>
					<div>
						<button>login</button>
						<button>logout</button>
						<Search
							onChange={(e) => this._updateSearchInput(e)}
							onClick={this._triggerFetchWithClick}
							onKeyPress={(e) => this._triggerFetchWithEnter(e)}
						/>
						<button onClick={this._triggerFetchRestaurantsNearby}>Current Location</button>
					</div>
				</header>
				{searchResult ? (
					searchResult.map((restaurant) => (
						<div>
							<span>
								<img src={restaurant.photo} alt={restaurant.name} />
							</span>
							<span>
								<div>{restaurant.name}</div>
								<div>별점</div>
								<div>comment::: {restaurant.reviewID}</div>
							</span>
						</div>
					))
				) : null}
				<LocationRecommendation />
				<TodayReview reviewOfTheDay={reviewOfTheDay} />
				<RecentActivity recentActivityList={recentActivityList} />
				{/* <Footer /> */}
			</div>
		) : (
			<div>getting info...</div>
		);
	}
}

export default Main;
