import React from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import jwt from 'jsonwebtoken';
import Home from '../screens/home/Home';
import Login from '../screens/auth/Login';
import Signup from '../screens/auth/Signup';
import CreateBlog from '../screens/createblog/CreateBlog';
import Activate from '../screens/auth/Activate.jsx';
import BlogDetail from '../components/BlogDetail';
import ForgotPassword from '../screens/auth/ForgotPassword.jsx';
import ResetPassword from '../screens/auth/ResetPassword.jsx';
import UserProfile from '../screens/userprofile/Profile.jsx';
import PrivateRoute from './private/PrivateRoute';
import UserBlogs from '../screens/userprofile/UserBlogs';
import { getCookie } from '../utils/auth';
import { expireToken } from '../redux/actions/auth.actions';

function Routes({ history }) {
	const dispatch = useDispatch();
	history.listen(() => {
		if (window !== 'undefined') {
			const cookieChecked = getCookie('token');
			if (cookieChecked) {
				// varify token
				const decodeToken = jwt.decode(cookieChecked);
				const expiresIn = new Date(decodeToken.exp * 1000);
				if (new Date() > expiresIn) {
					dispatch(expireToken());
					return false;
				}
			} else {
				dispatch(expireToken());
			}
		}
	});
	return (
		<Switch>
			<Route path='/' exact render={(props) => <Home {...props} />} />
			<Route path='/signin' exact render={(props) => <Login {...props} />} />
			<Route path='/signup' exact render={(props) => <Signup {...props} />} />
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
			<PrivateRoute path='/blog/create' exact component={CreateBlog} />
			<Route
				path='/user/blogs'
				exact
				render={(props) => <UserBlogs {...props} />}
			/>
			<Route
				path='/blog/detail/:id'
				exact
				render={(props) => <BlogDetail {...props} />}
			/>
			<Route
				path='/activate/:token'
				exact
				render={(props) => <Activate {...props} />}
			/>
			<PrivateRoute path='/user/profile' exact component={UserProfile} />
			<Redirect to='/' />
		</Switch>
	);
}

export default withRouter(Routes);
