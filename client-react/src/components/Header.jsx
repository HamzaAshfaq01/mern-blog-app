import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux"
import Avatar from "react-avatar"
import Logo from '../assests/logo.svg';
import {signout} from "../utils/auth"

function Header() {
	const user=useSelector(state=>state.auth.user)
	return (
		<header class='site-header' >
			<div class='container header-inner justify-space-between'>
				<div class='header-logo flex'>
					<Link to='/' class='flex align-items logo-img theme-light-logo'>
						<img style={{ marginRight: '5px' }} src={Logo} alt='Logo' />{' '}
						<h1 style={{ margin: '0' }}>Blogs.</h1>
					</Link>
				</div>
				<input
					id='mobile-menu-toggle'
					class='mobile-menu-checkbox'
					type='checkbox'
				/>
				<label
					for='mobile-menu-toggle'
					class='mobile-menu-icon'
					aria-label='menu toggle button'>
					<span class='line'></span>
					<span class='line'></span>
					<span class='line'></span>
					<span class='sr-only'>Menu toggle button</span>
				</label>
				<div class='header-right flex'>
					<nav
						class='header-nav'
						role='navigation'
						aria-label='Main navigation'>
						<ul class='header-nav-list no-style-list' role='menu'>
							<li class='nav-item' role='menuitem'>
								<Link to='/' class='nav-current'>
									Home
								</Link>
							</li>
							<li class='nav-item' role='menuitem'>
								<Link to='/blog/create'>Create Blog</Link>
							</li>

							  {!user  && 
							 <>
								<li class='nav-item' role='menuitem'>
								    <Link to='/signin'>Sign in</Link>
							    </li>
							    <li class='nav-item' role='menuitem'>
								    <Link class='btn btn-menuitem' to='/signup'>
									    Sign Up
								    </Link>
						    	</li>
								</>
							}
							
							{user &&
							<div class="dropdown">
                                <button class="btn-transparent dropdown-toggle" type="button" id="dropdownMenuButton"                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={                              {display:"flex",justifyContent:"center",alignItems:"center"}}>
                                  <Avatar color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])} size="45" round={true} name={user.name}/>
                                </button>
  
                              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Link class="dropdown-item" to="/user/profile">Profile</Link>
                                <Link class="dropdown-item" to="/" onClick={()=>signout()}>Logout</Link>
                              </div>
                            </div>}
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
}

export default Header;
