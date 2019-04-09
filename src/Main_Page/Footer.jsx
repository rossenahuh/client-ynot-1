import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
	render() {
		return (
			<div className="footerWrapper">
				<ul className="footerUl">
					<li className="title">About</li>
					<li className="hyper_link_style">About Yelp</li>
					<li className="hyper_link_style">Careers</li>
					<li className="hyper_link_style">Press</li>
					<li className="hyper_link_style"> Investor Relations</li>
					<li className="hyper_link_style">Content Guidelines</li>
					<li className="hyper_link_style">Terms of Service</li>
					<li className="hyper_link_style">Privacy Policy</li>
				</ul>
				<ul className="footerUl">
					<li className="title">Discover</li>
					<li className="hyper_link_style">Yelp Project Cost Guides</li>
					<li className="hyper_link_style">Collections</li>
					<li className="hyper_link_style">Talk</li>
					<li className="hyper_link_style">Events</li>
					<li className="hyper_link_style">The Local Yelp</li>
					<li className="hyper_link_style">Yelp Blog</li>
					<li className="hyper_link_style">Support</li>
				</ul>
				<ul className="footerUl">
					<li className="title">Yelp for Business Owners</li>
					<li className="hyper_link_style">Claim your Business Page</li>
					<li className="hyper_link_style">Advertise on Yelp</li>
					<li className="hyper_link_style">Yelp Reservations</li>
					<li className="hyper_link_style">Yelp WiFi</li>
					<li className="hyper_link_style">Yelp Nowait</li>
					<li className="hyper_link_style">Business Success Stories</li>
					<li className="hyper_link_style">Business Support</li>
					<li className="hyper_link_style">Yelp Blog for Business Owners</li>
				</ul>
			</div>
		);
	}
}

export default Footer;
