import React, { Component } from 'react';

import configs from '../config/config.json';

const GOOGLEMAPAPIKEY = configs.GOOGLEMAPAPIKEY;

class GoogleMap extends Component {
	componentDidMount() {
		this.renderMap();
		console.log('map mouted');
	}

	renderMap = () => {
		loadScript(`https://maps.googleapis.com/maps/api/js?key=${GOOGLEMAPAPIKEY}&callback=initMap`);
		window.initMap = this.initMap;
	};

	initMap = () => {
		var map = new window.google.maps.Map(document.getElementById('map'), {
			zoom: 10,
			center: { lat: -33.9, lng: 151.2 }
		});

		this.setMarkers(map);
	};

	setMarkers = (map) => {
		var beaches = [
			[ 'Bondi Beach', -33.890542, 151.274856, 4 ],
			[ 'Coogee Beach', -33.923036, 151.259052, 5 ],
			[ 'Cronulla Beach', -34.028249, 151.157507, 3 ],
			[ 'Manly Beach', -33.80010128657071, 151.28747820854187, 2 ],
			[ 'Maroubra Beach', -33.950198, 151.259302, 1 ]
		];
		for (var i = 0; i < beaches.length; i++) {
			var beach = beaches[i];
			var marker = new window.google.maps.Marker({
				position: { lat: beach[1], lng: beach[2] },
				map: map,
				title: beach[0],
				zIndex: beach[3]
			});
		}
	};

	render() {
		console.log('render map');
		return (
			<div className="map-wrapper">
				<div id="map" />
			</div>
		);
	}
}

function loadScript(url) {
	var index = window.document.getElementsByTagName('script')[0];
	var script = window.document.createElement('script');
	script.src = url;
	script.async = true;
	script.defer = true;
	index.parentNode.insertBefore(script, index);
}

export default GoogleMap;
