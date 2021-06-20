import React from 'react'
import bgPic from "../../assests/login.jpg"
import {Link} from "react-router-dom"

function Login() {
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
                <form class="members-form text-left js-member-form" data-members-form="login" autocomplete="off">
                    <div class="members-form-box">
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
