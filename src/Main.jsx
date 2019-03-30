import React, { Component } from 'react';
import LocationRecommendation from './LocationRecommendation';
import TodayReview from './TodayReview';
import RecentActivity from './RecentActivity';
import Search from './Search';

class Main extends Component {
	constructor() {
		super();

		this.state = {
			reviewOfTheDay: 'null',
			recentActivityList: [],
			searchInput: 'HI',
			searchResult: []
		};
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

	render() {
		const { reviewOfTheDay, recentActivityList, searchInput } = this.state;
		return reviewOfTheDay && recentActivityList ? (
			<div>
				<header>
					<div>
						<button>login</button>
						<button>logout</button>
						<Search onChange={(e) => this._updateSearchInput(e)} />
						{/* <SearchBar onhange={(e) => this._updateSearchInput(e)} /> */}
					</div>
				</header>
				<div>SEARCH RESULT::: {searchInput}</div>
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
