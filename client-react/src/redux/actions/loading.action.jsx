import { SET_LOADING, CLEAR_LOADING } from '../constants/constants';

// SET LOADING
export const setLoading = () => {
	return {
		type: SET_LOADING,
		payload: true,
	};
};

// CLEAR LOADING
export const clearLoading = (message) => {
	return {
		type: CLEAR_LOADING,
		payload: false,
	};
};
