import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
	render() {
		return (
			<div className="footerWrapper">
				<ul className="footerUl">
					About
					<li>
						<a href="#">About Yelp</a>
					</li>
					<li>
						<a href="#">Careers</a>
					</li>
					<li>
						<a href="#">Press</a>
					</li>
					<li>
						<a href="#">Investor Relations</a>
					</li>
					<li>
						<a href="#">Content Guidelines</a>
					</li>
					<li>
						<a href="#">Terms of Service</a>
					</li>
					<li>
						<a href="#">Privacy Policy</a>
					</li>
				</ul>
				<ul className="footerUl">
					Discover
					<li>
						<a href="#">Yelp Project Cost Guides</a>
					</li>
					<li>
						<a href="#">Collections</a>
					</li>
					<li>
						<a href="#">Talk</a>
					</li>
					<li>
						<a href="#">Events</a>
					</li>
					<li>
						<a href="#">The Local Yelp</a>
					</li>
					<li>
						<a href="#">Yelp Blog</a>
					</li>
					<li>
						<a href="#">Support</a>
					</li>
				</ul>
				<ul className="footerUl">
					Yelp for Business Owners
					<li>
						<a href="#">Claim your Business Page</a>
					</li>
					<li>
						<a href="#">Advertise on Yelp</a>
					</li>
					<li>
						<a href="#">Yelp Reservations</a>
					</li>
					<li>
						<a href="#">Yelp WiFi</a>
					</li>
					<li>
						<a href="#">Yelp Nowait</a>
					</li>
					<li>
						<a href="#">Business Success Stories</a>
					</li>
					<li>
						<a href="#">Business Support</a>
					</li>
					<li>
						<a href="#">Yelp Blog for Business Owners</a>
					</li>
				</ul>
			</div>
		);
	}
}

export default Footer;
