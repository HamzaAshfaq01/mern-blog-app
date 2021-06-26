import React, { useState, useEffect } from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { Link, Redirect } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';

import bgPic from '../../assests/login.jpg';
import GoogleLogo from '../../assests/google.svg';
import { login, googlelogin, facebooklogin } from '../../redux/actions/auth.actions';
import Loader from '../../components/Loader';

function Login({ history }) {
	const dispatch = useDispatch();

	const user = useSelector((state) => state.auth.user);
	const loader = useSelector((state) => state.loading.loader);

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	const { email, password } = formData;

	const handleChange = (text) => (e) => {
		setFormData({ ...formData, [text]: e.target.value });
	};

	const responseGoogle = (response) => {
		dispatch(googlelogin(response.tokenId));
		// sendGoogleToken(response.tokenId);
	};

	const responseFacebook = (response) => {
		dispatch(facebooklogin(response.userID, response.accessToken));
		// sendFacebookToken(response.userID, response.accessToken);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(login(formData));
	};

	return (
		<div class='members-page-wrap'>
			<div class='members-content-wrap'>
				<div class='members-wrap'>
					<h1 class='members-title h3 text-center'>Sign in</h1>
					<div class='members-description text-center'>
						Sign into your account for full access
					</div>
					<form
						class='members-form text-left js-member-form'
						autocomplete='off'
						onSubmit={handleSubmit}>
						<div class='members-form-box'>
							<GoogleLogin
								clientId={`${process.env.REACT_APP_GOOGLE_CLIENT}`}
								onSuccess={responseGoogle}
								onFailure={responseGoogle}
								cookiePolicy={'single_host_origin'}
								render={(renderProps) => (
									<button
										onClick={renderProps.onClick}
										disabled={renderProps.disabled}
										class='btn btn-block form-field btn-mid'
										style={{ margin: '5px 0 10px 0' }}>
										<img
											className='social-logo'
											src={GoogleLogo}
										/>
										Sign In with Google
									</button>
								)}></GoogleLogin>
							<FacebookLogin
								appId={`${process.env.REACT_APP_FACEBOOK_CLIENT}`}
								autoLoad={false}
								callback={responseFacebook}
								render={(renderProps) => (
									<button
										onClick={renderProps.onClick}
										class='btn btn-block form-field btn-mid'
										style={{ margin: '5px 0 20px 0' }}>
										<div className=' p-2 rounded-full '>
											<i
												className='fab fa-facebook'
												style={{ marginRight: '10px' }}
											/>
											<span className='ml-4'>
												Sign In with Facebook
											</span>
										</div>
									</button>
								)}
							/>
							<div class='form-field-wrap'>
								<label for='email' class='sr-only'>
									Email
								</label>
								<input
									type='email'
									class='email form-field'
									id='email'
									placeholder='Your email address'
									required='true'
									autocomplete='off'
									value={email}
									onChange={handleChange('email')}
								/>
								<label for='password' class='sr-only'>
									Password
								</label>
								<input
									type='password'
									class='form-field'
									id='password'
									placeholder='Your password'
									required='true'
									autocomplete='off'
									value={password}
									onChange={handleChange('password')}
								/>
								<div class='forgot-password text-right'>
									<small>
										<Link to='/password/forgot'>
											Forgot Password
										</Link>
									</small>
								</div>

								<button
									class={`btn btn-block form-field ${
										loader && 'disabled'
									}`}
									type='submit'
									name='submit'>
									<span>{loader ? <Loader /> : 'Login'}</span>
								</button>
							</div>
						</div>
					</form>
					<div class='alternate-option text-center'>
						<small>
							Don&#x27;t have an account yet?{' '}
							<Link to='/signup'>Sign up</Link>
						</small>
					</div>
				</div>
			</div>
			<div class='cover-wrap'>
				<img
					class='cover-image'
					loading='lazy'
					sizes='(max-width: 1200px) 600px, (max-width: 1668px) 1000px, 1200px'
					src={bgPic}
					alt='Sign in'
				/>
			</div>
		</div>
	);
}

export default Login;
