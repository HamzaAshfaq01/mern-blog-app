import {
	POST_BLOG_FAIL,
	GET_USER_BLOG_SUCCESS,
	GET_USER_BLOG_FAIL,
	GET_ALL_BLOG_SUCCESS,
	GET_ALL_BLOG_FAIL,
	GET_BLOG_DETAIL_SUCCESS,
	GET_BLOG_DETAIL_FAIL,
} from '../constants/constants';

const initialState = {
	userblogs: [],
	allBlogs: [],
	blogDetail: {},
};

const AuthReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case GET_USER_BLOG_SUCCESS:
			return {
				...state,
				userblogs: payload,
			};
		case GET_ALL_BLOG_SUCCESS:
			return {
				...state,
				allBlogs: payload,
			};
		case GET_BLOG_DETAIL_SUCCESS:
			return {
				...state,
				blogDetail: payload,
			};

		default:
			return state;
	}
};

export default AuthReducer;
