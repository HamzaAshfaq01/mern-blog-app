import { authenticate, isAuth, signout, setLocalStorage } from '../../utils/auth';
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

const initialState = {
	access: null,
	loading: false,
	isAuthenticated: false,
	isReset: false,
	user: null,
};

const user = isAuth();

if (user) {
	initialState.user = user;
	initialState.isAuthenticated = true;
}

const AuthReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case REGISTER_SUCCESS:
			return {
				...state,
				access: payload,
			};
		case LOGIN_SUCCESS:
			authenticate(payload);
			return {
				...state,
				isAuthenticated: true,
				access: payload.token,
				user: payload.user,
			};
		case PROFILE_UPDATE_SUCCESS:
			setLocalStorage('user', payload);
			return {
				...state,
				user: payload,
			};
		case RESET_SUCCESS:
			return {
				...state,
				isReset: payload,
			};

		case LOGIN_FAIL:
		case REGISTER_FAIL:
		case LOGOUT_SUCCESS:
			signout();
			return {
				...state,
				isAuthenticated: false,
				user: null,
				access: null,
			};
		case RESET_FAIL:
			return {
				...state,
				isReset: payload,
			};

		default:
			return state;
	}
};

export default AuthReducer;
