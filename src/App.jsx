import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './Main_Page/Main';
import ItemPageArch from './Item_Page/ItemPageArch';
import SearchPage from './Search_Page/Component/SeachPage';
import Review from './review';

const App = () => {
	return (
		<Router>
			<div>
				<Route exact path="/" component={SearchPage} />
				<Route path="/item/:itemId" component={ItemPageArch} />
				<Route path="/review" component={Review} />
			</div>
		</Router>
	);
};

export default App;
