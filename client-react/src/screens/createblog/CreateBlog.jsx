import React, { useState } from 'react';
import bgPic from '../../assests/signup.jpg';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { createBlog } from '../../redux/actions/blog.actions.jsx';
import Loader from '../../components/Loader';

function CreateBlog() {
	const dispatch = useDispatch();
	const loader = useSelector((state) => state.loading.loader);
	const [userData, setUserData] = useState({
		title: '',
		description: '',
		image: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserData({ ...userData, [name]: value });
	};
	const handleFile = (e) => {
		setUserData({ ...userData, image: e.target.files[0] });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('title', userData.title);
		formData.append('description', userData.description);
		formData.append('image', userData.image);
		dispatch(createBlog(formData));
	};

	return (
		<div class='members-page-wrap'>
			<div class='members-content-wrap'>
				<div class='members-wrap'>
					<h1 class='members-title h3 text-center'>Creating Blog.</h1>
					<div class='members-description text-center'>
						Get access to members only content.
					</div>
					<form
						class='members-form text-left js-member-form'
						onSubmit={handleSubmit}>
						<div class='members-form-box'>
							<div class='form-field-wrap'>
								<input
									type='text'
									class='form-field'
									placeholder='Blog Title'
									required=''
									value={userData.title}
									name='title'
									onChange={handleChange}
								/>
								<textarea
									rows='4'
									placeholder='Blog Body'
									class=' form-field'
									value={userData.description}
									name='description'
									onChange={handleChange}></textarea>

								<input
									type='file'
									class=' form-field'
									id='password'
									placeholder='Your Password'
									required=''
									onChange={handleFile}
								/>

								<button
									class={`btn btn-block form-field ${
										loader && 'disabled'
									}`}
									type='submit'
									name='submit'>
									<span>{loader ? <Loader /> : 'Post Blog'}</span>
								</button>
							</div>
						</div>
					</form>
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

export default CreateBlog;
