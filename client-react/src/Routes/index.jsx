import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Login from '../screens/Login.jsx';
import Register from '../screens/Register.jsx';
import Activate from '../screens/Activate.jsx';
import Private from '../screens/Private.jsx';
import Admin from '../screens/Admin.jsx';
import ForgetPassword from '../screens/ForgetPassword.jsx';
import ResetPassword from '../screens/ResetPassword.jsx';

import PrivateRoute from './private/PrivateRoute';

function Routes() {
	return (
		<Switch>
			<Route path='/login' exact render={(props) => <Login {...props} />} />
			<Route
				path='/register'
				exact
				render={(props) => <Register {...props} />}
			/>
			<Route
				path='/users/password/forget'
				exact
				render={(props) => <ForgetPassword {...props} />}
			/>
			<Route
				path='/users/password/reset/:token'
				exact
				render={(props) => <ResetPassword {...props} />}
			/>
			<Route
				path='/users/activate/:token'
				exact
				render={(props) => <Activate {...props} />}
			/>
			<PrivateRoute path='/private' exact component={Private} />
			<Redirect to='/' />
		</Switch>
	);
}

export default Routes;
