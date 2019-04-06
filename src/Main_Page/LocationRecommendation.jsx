import React, { Component } from 'react';
import RestaurantsInfo from './RestaurantsInfo';
import './LocationRecommendation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	Button,
	ButtonGroup,
	Container,
	Row,
	Col,
	Spinner,
	Nav,
	NavItem,
	CardDeck,
	CardColumns,
	CardGroup
} from 'reactstrap';

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
			let hotThree = json.slice(-3);
			this.setState({
				current: hotThree
			});
		});
	}

	_getLocationData(e) {
		console.log(e.target.innerHTML);
		fetch(`http://localhost:3002/api/restaurants/nearby?district=${e.target.innerHTML}`)
			.then((res) => res.json())
			.then((json) => {
				let hotThree = json.slice(-3);
				this.setState({
					current: hotThree
				});
			});
	}

	render() {
		const { current } = this.state;
		return (
			<div>
				<h5>Yelp Seoul</h5>
				<div className="LR-Nav">
					<Button outline color="danger" onClick={this._getLocationData}>
						성수
					</Button>
					<Button outline color="danger" onClick={this._getLocationData}>
						강남
					</Button>
					<Button outline color="danger" onClick={this._getLocationData}>
						종로
					</Button>
					<Button outline color="danger" onClick={this._getLocationData}>
						마포
					</Button>
				</div>
				<CardDeck className="LR-preview">
					<RestaurantsInfo current={current} />
				</CardDeck>
			</div>
		);
	}
}

export default LocationRecommendation;
