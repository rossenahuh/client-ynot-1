import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from '../Main_Page/Footer';
import RestaurantList from './RestaurantList';
import Map from './Map';
import './SearchResult.css';
class SearchResult extends Component {
	render() {
		const { history } = this.props;
		const location = this.props.match.params.location;
		return (
			<Container className="container">
				<Header history={history} />
				<Row>
					<Col>
						<RestaurantList location={location} />
					</Col>
				</Row>
				<Footer />
				<Map />
			</Container>
		);
	}
}

export default SearchResult;
