import { GET_MSG, CLEAR_MSG } from '../constants/constants';

// RETURN ERRORS
export const returnMessage = (message) => {
	console.log(message);
	return {
		type: GET_MSG,
		payload: message,
	};
};

// CLEAR ERRORS
export const clearMessage = () => {
	return {
		type: CLEAR_MSG,
	};
};
