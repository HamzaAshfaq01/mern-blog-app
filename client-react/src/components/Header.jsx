import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assests/logo.svg';

function Header() {
	return (
		<header class='site-header'>
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
								<Link to='/create'>Create Blog</Link>
							</li>

							<li class='nav-item' role='menuitem'>
								<Link to='/signin'>Sign in</Link>
							</li>
							<li class='nav-item' role='menuitem'>
								<Link class='btn btn-menuitem' to='/signup'>
									Sign Up
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
}

export default Header;
