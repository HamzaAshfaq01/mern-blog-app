import React,{useEffect,useState,createRef} from 'react'
import {useSelector,useDispatch} from "react-redux"
import {Link} from "react-router-dom"
import bgPic from "../../assests/login.svg"
import {updateProfile} from "../../redux/actions/auth.actions"

function Profile() {
    const nameInput=createRef(null)
     const user = useSelector(state => state.auth.user)
 const {name,email,password,role}=user
    const [formData, setFormData] = useState({
		name:"",  
		email,
		password: '',
		role,
	});
const dispatch = useDispatch()


 	const handleChange = (text) => (e) => {
		setFormData({ ...formData, [text]: e.target.value });
	};

 const handleSubmit=(e)=>{
     console.log(formData);
     e.preventDefault()
    dispatch(updateProfile(formData))
 }
 
 useEffect(()=>{
 },[])
    return (
       <div class='members-page-wrap'>
			<div class='members-content-wrap'>
				<div class='members-wrap'>
					<h1 class='members-title h3 text-center'>Profile Update</h1>
					<form
						class='members-form text-left js-member-form'
						autocomplete='off'
						onSubmit={handleSubmit}>
						<div class='members-form-box'>
						
							<div class='form-field-wrap'>
								<input
                                disabled
									type='text'
									class='form-field'
									placeholder='Role'
									required='true'
                                    value={role}
								/>
								<input
                                disabled

									type='email'
									class='email form-field'
									id='email'
									placeholder='Your email address'
									required='true'
									autocomplete='off'
                                    value={email}
								/>
                                	<input
                             
									type='text'
									class='form-field'
									placeholder='Name'
									required='true'
                                    onChange={handleChange('name')}
									defaultValue={name}
                                    ref={(input)=>input}
								/>
						
								<input
									type='password'
									class='form-field'
									id='password'
									placeholder='Password'
									required='true'
									autocomplete='off'
                                    onChange={handleChange('password')}
									value={password}
								/>
							
								<button
									class='btn btn-block form-field'
									type='submit'
									name='submit'>
									<span>Update</span>
								</button>
							</div>
						</div>
					</form>
					<div class='alternate-option text-center'>
						<small>
							
							<Link to='/'>Go Home</Link>
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
    )
}

export default Profile
