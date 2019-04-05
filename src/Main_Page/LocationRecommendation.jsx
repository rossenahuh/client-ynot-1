import React, { Component } from 'react';
import RestaurantsInfo from './RestaurantsInfo';

class LocationRecommendation extends Component {
	constructor() {
		super();

		this.state = {
			current: [],
			arrForRating: []
		};
		this._getLocationData = this._getLocationData.bind(this);
	}

	componentDidMount() {
		fetch(`http://localhost:3002/api/restaurants/nearby?district=성수`).then((res) => res.json()).then((json) => {
			console.log(json);
			this.setState({
				current: json
			});
		});
	}

	_getLocationData(e) {
		console.log(e.target.innerHTML);
		fetch(`http://localhost:3002/api/restaurants/nearby?district=${e.target.innerHTML}`)
			.then((res) => res.json())
			.then((json) => {
				console.log(json);
				this.setState({
					current: json
				});
			});
	}

	render() {
		const { current } = this.state;
		return (
			<div>
				<h4>Yelp Korea</h4>
				<div>
					<button onClick={this._getLocationData}>성수</button>
					<button onClick={this._getLocationData}>강남</button>
					<button onClick={this._getLocationData}>종로</button>
					<button onClick={this._getLocationData}>마포</button>
				</div>
				<RestaurantsInfo current={current} />
			</div>
		);
	}
}

export default LocationRecommendation;
