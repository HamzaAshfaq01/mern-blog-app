import { GET_MSG, CLEAR_MSG } from '../constants/constants';

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

		case CLEAR_MSG:
			return {
				message: null,
			};
		default:
			return state;
	}
};

export default msgReducer;
