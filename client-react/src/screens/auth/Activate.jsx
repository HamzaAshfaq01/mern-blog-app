import React, { useState, useEffect } from 'react';
import bgPic from "../../assests/login.svg";
import jwt from 'jsonwebtoken';
import { Link, Redirect } from 'react-router-dom';

import { useDispatch,useSelector } from 'react-redux';
import { activateAccount } from '../../redux/actions/auth.actions';


const Activate = ({ match, history }) => {
    const dispatch = useDispatch();

	const access=useSelector(state=>state.auth.access)

	const [formData, setFormData] = useState({
		name: '',
		token: '',
	});

	useEffect(() => {
		let token = match.params.token;
		let { name } = jwt.decode(token);

		if (token) {
			setFormData({ ...formData, name, token });
		}
	}, [match.params]);

	const { name, token, show } = formData;


	const handleSubmit = (e) => {
		e.preventDefault();

        dispatch(activateAccount({token}));
	};

	return (
	
        <div class='members-page-wrap'>
		{access && history.push("/signin")}
			<div class='members-content-wrap'>
				<div class='members-wrap'>
					<h1 class='members-title h3 text-center'>Activate Account</h1>
					<div class='members-description text-center'>
					<h4>
		 					Welcome {name}
	 				</h4>
					</div>
					<form
						class='members-form text-left js-member-form'
						autocomplete='off'
						onSubmit={handleSubmit}>
						<div class='members-form-box'>
						
							<div class='form-field-wrap'>
								<button
									class='btn btn-block form-field'
									type='submit'
									name='submit'>
									<span>Activate your Account</span>
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
};

export default Activate;
