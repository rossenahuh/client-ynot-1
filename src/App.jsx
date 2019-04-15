import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './Main_Page/Main';
import RestaurantInfo from './Restaurant_Page/RestaurantInfo';
import SearchResult from './SearchResult_Page/SearchResult';
import WriteReview from './WriteReview/WriteReview';

const App = () => {
	return (
		<Router>
			<div>
				<Route exact path="/" component={Main} />
				<Route path="/search/:location" component={SearchResult} />
				<Route path="/info/:restaurantID" component={RestaurantInfo} />
				<Route path="/writereview/:restaurantID" component={WriteReview} />
			</div>
		</Router>
	);
};

export default App;
