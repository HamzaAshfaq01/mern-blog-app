import React from 'react'
import bgPic from "../../assests/login.jpg"
import {Link} from "react-router-dom"
import GoogleLogo from "../../assests/google.svg"
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';


function Login() {
    	const responseGoogle = (response) => {
		// sendGoogleToken(response.tokenId);
	};

	const responseFacebook = (response) => {
		// sendFacebookToken(response.userID, response.accessToken);
	};
    
    return (
      <div class="members-page-wrap">
        <div class="members-content-wrap">
          
            <div class="members-wrap">
                <h1 class="members-title h3 text-center">
                    Sign in
                </h1>
                <div class="members-description text-center">
                    Sign into your account for full access
                </div>
                <form class="members-form text-left js-member-form"  autocomplete="off">
                    <div class="members-form-box">
                    <GoogleLogin
									clientId={`${process.env.REACT_APP_GOOGLE_CLIENT}`}
									onSuccess={responseGoogle}
									onFailure={responseGoogle}
									cookiePolicy={'single_host_origin'}
									render={(renderProps) => (
										<button
											onClick={renderProps.onClick}
											disabled={renderProps.disabled}
											class="btn btn-block form-field btn-secondary"  style={{margin:"5px 0 10px 0"}} >
                                            <img className="social-logo" src={GoogleLogo}/>
											
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
											class="btn btn-block form-field" style={{margin:"5px 0 20px 0"}} >
											<div className=' p-2 rounded-full '  >
												<i className='fab fa-facebook' style={{marginRight:"10px"}} />
                                                	<span className='ml-4'>
												Sign In with Facebook
											</span>
											</div>
										
										</button>
									)}
								/>
                        <div class="form-field-wrap">

                            <label for="email" class="sr-only">Email</label>
                            <input type="email" class="email form-field" id="email" placeholder="Your email address" required="" autocomplete="off"/>
                               <label for="password" class="sr-only">Password</label>
                            <input  type="password" class="form-field" id="password" placeholder="Your password" required="" autocomplete="off"/>
                            <div class="forgot-password text-right">
                                 <small><Link to="/password/forgot">Forgot Password</Link></small>
                            </div>
                            <button class="btn btn-block form-field" type="submit" name="submit"><span>Login</span></button>
                        </div>

                    </div>
                   
                </form>
                <div class="alternate-option text-center">
                    <small>Don&#x27;t have an account yet? <Link to="/signup">Sign up</Link></small>
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

export default Login
