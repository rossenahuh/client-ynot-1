import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from '../Main_Page/Footer';
import RestaurantList from './RestaurantList';
import Map from './Map';
class SearchResult extends Component {
	constructor(props) {
		super(props);

		this.state = {
			current: this.props.match.params.location
		};
	}
	render() {
		const { current } = this.state;
		const { history } = this.props;
		console.log('props:::: ', this.props);
		return (
			<Container className="container">
				<Header history={history} />
				<Row>
					<Col>
						<RestaurantList location={current} />
					</Col>
					<Map />
				</Row>
				<Footer />
			</Container>
		);
	}
}

export default SearchResult;
