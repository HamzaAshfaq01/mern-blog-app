import React from 'react'
import bgPic from "../../assests/login.jpg"
import {Link} from "react-router-dom"

function ResetPassword() {
    return (
      <div class="members-page-wrap">
        <div class="members-content-wrap">
          
            <div class="members-wrap">
                <h1 class="members-title h3 text-center">
                   Reset Password
                </h1>
           
                <form class="members-form text-left js-member-form" data-members-form="login" autocomplete="off">
                    <div class="members-form-box">
                        <div class="form-field-wrap">
                            <label for="password" class="sr-only">New Password</label>
                            <input  type="password" class="form-field" id="password" placeholder="New password" required="" autocomplete="off"/>
                               <label for="password" class="sr-only">Confirm Password</label>
                            <input  type="password" class="form-field" id="password" placeholder="Confirm password" required="" autocomplete="off"/>

                           
                            <button class="btn btn-block form-field" type="submit" name="submit"><span>Reset</span></button>
                        </div>

                    </div>
                   
                </form>
                <div class="alternate-option text-center">
                    <small>Back to <Link to="/signup">Sign in</Link></small>
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

export default ResetPassword
