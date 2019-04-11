import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RestaurantList.css';

class RestaurantList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentList: null,
			location: this.props.location
		};

		this._fetchRestaurantList = this._fetchRestaurantList.bind(this);
	}

	_fetchRestaurantList(location) {
		fetch(`http://localhost:3002/api/restaurants/nearby?district=${location}`)
			.then((res) => res.json())
			.then((json) =>
				this.setState({
					current: json
				})
			);
	}

	componentDidMount() {
		this._fetchRestaurantList(this.state.location);
	}

	render() {
		const { current } = this.state;
		console.log(current);
		return current
			? current.map((restaurnat) => (
					<Row key={restaurnat.id}>
						<img className="img" src={restaurnat.src} alt={restaurnat.name} />
						<Col>
							<Row>
								<Col>1</Col>
								<Col>{restaurnat.name}</Col>
								<Col>{restaurnat.contact}</Col>
							</Row>
							<Row>
								<Col>{restaurnat.averageRating}</Col>
								<Col>{restaurnat.numberOfReviews}</Col>
								<Col>{restaurnat.address}</Col>
							</Row>
							<Row>{restaurnat.latestComment}</Row>
						</Col>
					</Row>
				))
			: 'loading...';
	}
}

export default RestaurantList;
