import React from 'react';
import Search from '../Main_Page/Search';
import LoginBotton from '../Main_Page/LoginBotton';
import { Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

function Header({ history }) {
	return (
		<Row>
			<img
				src="https://s3-media2.fl.yelpcdn.com/assets/srv0/styleguide/1ea40efd80f5/assets/img/brand_guidelines/yelp_fullcolor.png"
				alt="yelp logo"
			/>

			<Search history={history} />
			<LoginBotton />
		</Row>
	);
}

export default Header;
