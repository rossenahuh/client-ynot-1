import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Main from './Main_Page/Main';
import RestaurantInfo from './Restaurant_Page/RestaurantInfo';
import SearchResult from './SearchResult_Page/SearchResult';
import Review from './review';

const App = () => {
	return (
		<Router>
			<div>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/users">Users</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
				<Switch>
					<Route exact path="/" component={Main} />
					<Route path="/search/:location" component={SearchResult} />
					<Route path="/restaurant/:restaurantID" component={RestaurantInfo} />
					<Route path="/review/:restaurantID" component={Review} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
