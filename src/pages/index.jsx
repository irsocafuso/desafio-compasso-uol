import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import User from './User';

import './index.scss'


function Routes() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route path="/:user" component={User}></Route>
			</Switch>
		</Router>
	);
}

export default Routes;