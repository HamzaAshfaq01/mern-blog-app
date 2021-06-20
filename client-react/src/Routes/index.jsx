import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Home from "../screens/home/Home"
import Login from '../screens/auth/Login';
import Signup from '../screens/auth/Signup';
// import Activate from '../screens/Activate.jsx';
import BlogDetail from '../components/BlogDetail';
import ForgotPassword from '../screens/auth/ForgotPassword.jsx';
import ResetPassword from '../screens/auth/ResetPassword.jsx';
// import PrivateRoute from './private/PrivateRoute';

function Routes() {
	return (
		<Switch>
			<Route path='/' exact render={(props) => <Home {...props} />} />
			<Route path='/signin' exact render={(props) => <Login {...props} />} />
			<Route
				path='/signup'
				exact
				render={(props) => <Signup {...props} />}
			/>
			<Route
				path='/password/forgot'
				exact
				render={(props) => <ForgotPassword {...props} />}
			/>
			<Route
				path='/password/reset/:token'
				exact
				render={(props) => <ResetPassword {...props} />}
			/>
			<Route 	path='/blog/detail'
				exact render={(props)=><BlogDetail {...props}/>}/>
			{/* <Route
				path='/users/activate/:token'
				exact
				render={(props) => <Activate {...props} />}
			/> */}
			{/* <PrivateRoute path='/private' exact component={Private} /> */}
			<Redirect to='/' />
		</Switch>
	);
}

export default Routes;
