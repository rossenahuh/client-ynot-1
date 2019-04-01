import React, { Component } from 'react';
import RestaurantsInfo from './RestaurantsInfo';

class LocationRecommendation extends Component {
	constructor() {
		super();

		this.state = {
			current: [
				{
					id: '1',
					name: '성수족발',
					address: '서울시 성수동 성수대로 11',
					location: '서울',
					photo: 'http://www.menupan.com/restaurant/restimg/007/zzmenuimg/h1193376_z.jpg'
				},
				{
					id: '2',
					name: '토라식당',
					address: '서울시 뚝섬대로 52',
					location: '서울',
					photo: 'https://t1.daumcdn.net/cfile/tistory/997F613359E84A2031'
				}
			]
		};
		this._getLocationData = this._getLocationData.bind(this);
	}

	_getLocationData(e) {
		fetch(`http://localhost:3000/restaurants?location=${e.target.innerText}`)
			.then((res) => res.json())
			.then((json) =>
				this.setState({
					current: json
				})
			);
	}

	render() {
		const { current } = this.state;
		return (
			<div>
				<h4>Yelp Korea</h4>
				<div>
					<button onClick={this._getLocationData}>서울</button>
					<button onClick={this._getLocationData}>부산</button>
					<button onClick={this._getLocationData}>수원</button>
					<button onClick={this._getLocationData}>대구</button>
				</div>
				<RestaurantsInfo current={current} />
			</div>
		);
	}
}

export default LocationRecommendation;
