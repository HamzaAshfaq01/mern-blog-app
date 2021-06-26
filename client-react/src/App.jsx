import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './Routes/index';
import { useSelector, useDispatch } from 'react-redux';
import { clearMessage } from './redux/actions/message.action';

function App({ history }) {
	const dispatch = useDispatch();
	const state = useSelector((state) => state.message);
	const { error, message } = state;

	React.useEffect(() => {
		error &&
			toast.error(error, {
				position: 'top-right',
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		message &&
			toast.success(message, {
				position: 'top-right',
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});

		return () => {
			dispatch(clearMessage());
		};
	}, [error, message]);
	return (
		<div className='site-wrap' style={{ minHeight: '100vh' }}>
			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<Header />
			<Routes />
			<Footer />
		</div>
	);
}

export default App;
