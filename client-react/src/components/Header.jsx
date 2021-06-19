import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	React.useEffect(() => {
		const hamburger = document.querySelector('.hamburger');
		const menu = document.querySelector('.menu');
		const menu_links = document.querySelectorAll('.menu-link');
		menu_links.forEach((menu_link) => {
			menu_link.addEventListener('click', () => {
				menu.classList.remove('toogle-menu');
				hamburger.classList.remove('close');
			});
		});

		hamburger.addEventListener('click', function () {
			menu.classList.toggle('toogle-menu');
			this.classList.toggle('close');
		});
	}, []);
	return (
		<header>
			<div className='container mx-auto'>
				<nav class='navbar'>
					<div class='branding'>
						<h2>
							<Link to='/' class='branding-logo'>
								Smashtheshell
							</Link>
						</h2>
					</div>
					<label for='input-hamburger' class='hamburger '></label>
					<input type='checkbox' id='input-hamburger' hidden />
					<ul class='menu p-0 m-0'>
						<li>
							<Link to='/login' class='menu-link'>
								Login
							</Link>
						</li>

						<li>
							<Link to='/register' class='menu-link'>
								Create Acount
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
