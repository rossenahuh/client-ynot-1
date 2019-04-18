import React from 'react';
import Search from '../Main_Page/Search';
import { Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import logo from './yelp-logo/yelp-logo.png';
import LoginSignupBotton from '../Main_Page/LoginSignupButton';

console.log(logo);

function Header({ history }) {
	return (
		<Row className="header-wrapper">
			<Row className="header-width-adjust">
				<Link to="/">
					<img className="logo-image" src={logo} alt="yelp logo" />
				</Link>
				<Row>
					<Search history={history} />
				</Row>

				<Row>
					<LoginSignupBotton history={history} />
				</Row>
			</Row>
		</Row>
	);
}

export default Header;
