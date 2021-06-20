import React from 'react'
import bgPic from "../../assests/signup.jpg"
import {Link} from "react-router-dom"

function ForgotPassword() {
    return (
      <div class="members-page-wrap">
        <div class="members-content-wrap">
        
            <div class="members-wrap">
                <h1 class="members-title h3 text-center">
                 Reset Password
                </h1>
                <div class="members-description text-center">
            Please enter your email address and we'll send you a link to reset your password.
                </div>
                <form class="members-form text-left js-member-form" data-members-form="login" autocomplete="off">
                    <div class="members-form-box">
                        <div class="form-field-wrap">
                       
                            <input  type="email" class="form-field" id="email" placeholder="Your email address" required="" autocomplete="off"/>
                          
                            <button class="btn btn-block form-field" type="submit" name="submit"><span>Send Link</span></button>
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

export default ForgotPassword
