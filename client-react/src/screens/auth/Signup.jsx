import React from 'react'
import bgPic from "../../assests/signup.jpg"
import {Link} from "react-router-dom"

function Signup() {
    return (
      <div class="members-page-wrap">
        <div class="members-content-wrap">
        
            <div class="members-wrap">
                <h1 class="members-title h3 text-center">
                    Sign up
                </h1>
                <div class="members-description text-center">
                 Get access to members only content.
                </div>
                <form class="members-form text-left js-member-form" data-members-form="login" autocomplete="off">
                    <div class="members-form-box">
                        <div class="form-field-wrap">
                            <input type="text" class="form-field" id="name" placeholder="Your name" required="" autocomplete="off"/>
                            <input data-members-email="" type="email" class="email form-field" id="email" placeholder="Your email address" required="" autocomplete="off"/>
                            <input  type="password" class=" form-field" id="password" placeholder="Your Password" required="" autocomplete="off"/>
                           

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
