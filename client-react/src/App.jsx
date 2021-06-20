import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { signout } from './helpers/auth';
import { ToastContainer, toast } from 'react-toastify';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './Routes/index';
function App({ history }) {
	return (
		<div className='site-wrap' style={{ minHeight: '100vh' }}>
			<Header />
			<Routes />
			<Footer />
		</div>
	);
}

export default App;
