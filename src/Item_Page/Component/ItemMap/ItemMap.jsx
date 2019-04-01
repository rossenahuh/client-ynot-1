import React, { Component } from 'react';
// import { GoogleComponent } from 'react-google-location';
const API_KEY = 'AIzaSyBFqi0owVeH0-g16pWUbHFVhHj312bNUqA';

class ItemMap extends Component {
	constructor() {
		super();
		this.state = {
			// address: props.item.address,
			latitude: null,
			longitude: null
		};
	}
	// getGoogleMap() {
	// 	const google = window.google;
	// 	if (!this.googleMapsPromise) {
	// 		this.googleMapsPromise = new Promise((resolve) => {
	// 			window.resolveGoogleMapsPromise = () => {
	// 				resolve(google);

	// 				delete window.resolveGoogleMapsPromise;
	// 			};

	// 			const script = document.createElement('script');
	// 			const API = '';
	// 			script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=resolveGoogleMapsPromise`;
	// 			script.async = true;
	// 			document.body.appendChild(script);
	// 		});
	// 	}
	// 	return this.googleMapsPromise;
	// }
	// componentWillMount() {
	// 	this.getGoogleMap();
	// }
	// componentDidMount() {
	// 	this.getGoogleMap().then((google) => {
	// 	});
	// }
	// getLatAndIng() {
	// }
	render() {
		return (
			<div>
				<h1>이곳은 지도구역</h1>
			</div>
		);
	}
}

export default ItemMap;
