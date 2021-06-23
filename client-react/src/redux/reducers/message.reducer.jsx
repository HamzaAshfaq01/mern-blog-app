import { GET_MSG, CLEAR_MSG, GET_ERROR } from '../constants/constants';

const initialState = {
	message: null,
	error: null,
};

const msgReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_MSG:
			return {
				message: action.payload,
			};
		case GET_ERROR:
			return {
				error: action.payload,
			};

		case CLEAR_MSG:
			return {
				message: null,
				error: null,
			};
		default:
			return state;
	}
};

export default msgReducer;
