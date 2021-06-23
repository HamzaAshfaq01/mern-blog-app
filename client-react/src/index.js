import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import App from './App.jsx';
import store from './redux/store';
import './scss/index.scss';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App>
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
			</App>
		</Provider>
	</BrowserRouter>,
	document.getElementById('root')
);
