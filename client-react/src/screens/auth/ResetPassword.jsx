import React, { useState, useEffect } from 'react';
import bgPic from '../../assests/login.jpg';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetpassword } from '../../redux/actions/auth.actions';
import Loader from '../../components/Loader';

function ResetPassword({ match }) {
	const dispatch = useDispatch();
	const isReset = useSelector((state) => state.auth.isReset);
	const loader = useSelector((state) => state.loading.loader);

	const [formData, setFormData] = useState({
		password1: '',
		password2: '',
		token: '',
	});
	const { password1, password2, token } = formData;

	const handleChange = (text) => (e) => {
		setFormData({ ...formData, [text]: e.target.value });
	};

	const handleSubmit = (e) => {
		console.log(formData);
		e.preventDefault();
		dispatch(resetpassword(formData));
	};

	useEffect(() => {
		let token = match.params.token;
		if (token) {
			setFormData({ ...formData, token });
		}
	}, []);

	return (
		<div class='members-page-wrap'>
			{isReset && <Redirect to='/signin' />}
			<div class='members-content-wrap'>
				<div class='members-wrap'>
					<h1 class='members-title h3 text-center'>Reset Password</h1>

					<form
						class='members-form text-left js-member-form'
						onSubmit={handleSubmit}>
						<div class='members-form-box'>
							<div class='form-field-wrap'>
								<label for='password' class='sr-only'>
									New Password
								</label>
								<input
									type='password'
									class='form-field'
									id='password'
									placeholder='New password'
									required
									onChange={handleChange('password1')}
									value={password1}
								/>

								<input
									type='password'
									class='form-field'
									id='password'
									placeholder='Confirm password'
									required
									onChange={handleChange('password2')}
									value={password2}
								/>

								<button
									class={`btn btn-block form-field ${
										loader && 'disabled'
									}`}
									type='submit'
									name='submit'>
									<span>{loader ? <Loader /> : 'Reset'}</span>
								</button>
							</div>
						</div>
					</form>
					<div class='alternate-option text-center'>
						<small>
							Back to <Link to='/signup'>Sign in</Link>
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

export default ResetPassword;
