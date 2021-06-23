import React,{useState} from 'react'
import bgPic from "../../assests/signup.jpg"
import {Link,Redirect} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';

import { register } from '../../redux/actions/auth.actions';

function Signup() {
    const dispatch = useDispatch();

    	const user = useSelector(state => state.auth.user)


    const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
	});
    const { name, email, password } = formData;

    const handleChange = (text) => (e) => {
		setFormData({ ...formData, [text]: e.target.value });
	};

    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(register(formData))
    }
 

    return (
      <div class="members-page-wrap">
        <div class="members-content-wrap">
        	{user &&  <Redirect to='/' />}
            <div class="members-wrap">
                <h1 class="members-title h3 text-center">
                    Sign up
                </h1>
                <div class="members-description text-center">
                 Get access to members only content.
                </div>
                <form onSubmit={handleSubmit} class="members-form text-left js-member-form"  autocomplete="off">
                    <div class="members-form-box">
                        <div class="form-field-wrap">
                            <input type="text" class="form-field" id="name" placeholder="Your name" required="" autocomplete="off"
                            onChange={handleChange('name')}
							value={name}/>
                            <input data-members-email="" type="email" class="email form-field" id="email" placeholder="Your email address" required="" autocomplete="off"
                            onChange={handleChange('email')}
							value={email}/>
                            <input  type="password" class=" form-field" id="password" placeholder="Your Password" required="" autocomplete="off"
                            onChange={handleChange('password')}
							value={password}/>
                           

                            <button class="btn btn-block form-field" type="submit" name="submit"><span>Signup</span></button>
                        </div>
                    </div>
                  
                </form>
                <div class="alternate-option text-center">
                    <small>Already have an account? <Link to="/signin">Sign in</Link></small>
                </div>
            </div>
        </div>
        <div class="cover-wrap">
            <img class="cover-image" loading="lazy"
              
                sizes="(max-width: 1200px) 600px, (max-width: 1668px) 1000px, 1200px"
                src={bgPic} alt="Sign in"/>
        </div>
    </div>
    )
}

export default Signup
