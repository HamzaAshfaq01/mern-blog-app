import axios from '../../utils/axios';
import {getCookie} from "../../utils/auth"
import { returnMessage } from './message.action';
import { setLoading, clearLoading } from './loading.action';
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT_SUCCESS,
	RESET_SUCCESS,
	RESET_FAIL,
	PROFILE_UPDATE_SUCCESS,
	PROFILE_UPDATE_FAIL,

} from '../constants/constants';

// REGIGSTER ACTION
export const register = (body) => async (dispatch) => {
	try {
		dispatch(setLoading(true));

		const { data } = await axios.post('/register', body);
		
		dispatch(clearLoading(false));
		dispatch(returnMessage(data.message));
	} catch (err) {
		if (err.response) {
			const {
				response: {
					data: { error },
				},
			} = err;
			dispatch(returnMessage(error));
		}

		dispatch(clearLoading(false));
	
	}
};

// Activation Action

export const activateAccount = (body) => async (dispatch) => {
	try {
		dispatch(setLoading(true));

		const { data } = await axios.post('/activation', body);

        const {token,message}=data

		dispatch({
			type: REGISTER_SUCCESS,
			payload: token,
		});
		dispatch(clearLoading(false));
		dispatch(returnMessage(message));
	} catch (err) {
		console.log(err);
		if (err.response) {
			const {
				response: {
					data: { error },
				},
			} = err;
			dispatch(returnMessage(error));
		}

		dispatch(clearLoading(false));
		dispatch({
			type: REGISTER_FAIL,
		});
	}
};

// LOGIN ACTION
export const login = (body) => async (dispatch) => {
	try {
		dispatch(setLoading(true));
		const { data } = await axios.post(`/login`, body);
		console.log(data);
		dispatch({
			type: LOGIN_SUCCESS,
			payload: data,
		});
		dispatch(clearLoading(false));
		dispatch(returnMessage(data.message)); 
	} catch (err) {
		if (err.response) {
			const {
				response: {
					data: { error },
				},
			} = err;
			dispatch(returnMessage(error));
		}
		dispatch(clearLoading(false));
		dispatch({
			type: LOGIN_FAIL,
		});
	}
};

// FORGOT PASSWORD ACTION
export const forgotpassword = (email) => async (dispatch) => {
	console.log(email);
	try {
		dispatch(setLoading());

		const { data } = await axios.put('/forgotpassword', { email });
 
		dispatch(clearLoading());
		dispatch(returnMessage(data.message));
	} catch (err) {
		if (err.response) {
			const {
				response: {
					data: { error },
				},
			} = err;
			dispatch(returnMessage(error));
		} 
		dispatch(clearLoading(false));
	}
};

// RESET PASSWORD ACTION
export const resetpassword = (body) => async (dispatch) => {
	const {password1,password2,token}=body
	try {
		dispatch(setLoading());

		const { data } = await axios.put(`/resetpassword`,body);

		console.log(data,"resetPassword");

		dispatch({
			type: RESET_SUCCESS,
			payload: true,
		});
		dispatch(clearLoading());
		dispatch(returnMessage(data.message));
	} catch (err) {
		dispatch({
			type: RESET_FAIL,
			payload: false,
		});
		if (err.response) {
			const {
				response: {
					data: { error },
				},
			} = err;
			console.log(error);
			dispatch(returnMessage(error));
		} 
		dispatch(clearLoading(false));
	}
};

// Update User Profile

// RESET PASSWORD ACTION
export const updateProfile = (body) => async (dispatch) => {
		const token = getCookie('token');
		console.log(token);
	try {
		dispatch(setLoading());

		const { data } = await axios.put(`/user/update`,body,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
		const {user,message}=data
		dispatch({
			type: PROFILE_UPDATE_SUCCESS,
			payload: user,
		});
		dispatch(clearLoading());
		dispatch(returnMessage(message));
	} catch (err) {
		dispatch({
			type: PROFILE_UPDATE_FAIL,
			payload: false,
		});
		if (err.response) {
			const {
				response: {
					data: { message },
				},
			} = err;
			dispatch(returnMessage(message));
		} else {
			dispatch(returnMessage(err.message));
		}
		dispatch(clearLoading(false));
	}
};

// LOGOUT ACTION
export const logout = () => {
	return {
		type: LOGOUT_SUCCESS,
	};
};
