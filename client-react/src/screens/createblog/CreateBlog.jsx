import React from 'react';
import bgPic from '../../assests/signup.jpg';
import { Link } from 'react-router-dom';

function CreateBlog() {
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
						data-members-form='login'
						autocomplete='off'>
						<div class='members-form-box'>
							<div class='form-field-wrap'>
								<input
									type='text'
									class='form-field'
									placeholder='Blog Title'
									required=''
									autocomplete='off'
								/>
								<textarea
									rows='4'
									placeholder='Blog Body'
									class=' form-field'></textarea>

								<input
									type='file'
									class=' form-field'
									id='password'
									placeholder='Your Password'
									required=''
									autocomplete='off'
								/>

								<button
									class='btn btn-block form-field'
									type='submit'
									name='submit'>
									<span>Post Blog</span>
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
