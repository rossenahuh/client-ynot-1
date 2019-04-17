import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from '../Main_Page/Footer';
import RestaurantList from './RestaurantList';
import GoogleMap from './GoogleMap';
import './SearchResult.css';
class SearchResult extends Component {
	render() {
		const { history } = this.props;
		const location = this.props.match.params.location;
		return (
			<Container className="container" fluid>
				<Col className="header">
					<Header history={history} />
				</Col>
				<Row className="body">
					<RestaurantList location={location} />
					<GoogleMap />
				</Row>
				<Footer />
			</Container>
		);
	}
}

export default SearchResult;
