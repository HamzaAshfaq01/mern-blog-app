import axios from '../../utils/axios';
import { getCookie } from '../../utils/auth';
import { returnMessage } from './message.action';
import { setLoading, clearLoading } from './loading.action';
import {
	POST_BLOG_SUCCESS,
	POST_BLOG_FAIL,
	GET_USER_BLOG_SUCCESS,
	GET_USER_BLOG_FAIL,
	GET_ALL_BLOG_SUCCESS,
	GET_ALL_BLOG_FAIL,
	GET_BLOG_DETAIL_SUCCESS,
	GET_BLOG_DETAIL_FAIL,
	GET_MSG,
	GET_ERROR,
	CLEAR_MSG,
} from '../constants/constants';

// createBlog ACTION
export const createBlog = (body) => async (dispatch) => {
	const token = getCookie('token');
	try {
		dispatch(setLoading(true));

		const { data } = await axios.post('/create/blog', body, {
			headers: {
				'Content-Type': 'multipart/form-data',
				Authorization: `Bearer ${token}`,
			},
		});
		dispatch(clearLoading(false));
	} catch (err) {
		if (err.response) {
			const {
				response: {
					data: { error },
				},
			} = err;
			console.log(error, 'blog error');
			dispatch({
				type: GET_ERROR,
				payload: error,
			});
		}
		dispatch(clearLoading(false));
		dispatch({ type: POST_BLOG_FAIL });
	}
};

// getAllBlogs ACTION
export const getAllBlogs = () => async (dispatch) => {
	try {
		dispatch(setLoading(true));

		const { data } = await axios.get('/allblogs');
		dispatch(clearLoading(false));
		dispatch({
			type: GET_ALL_BLOG_SUCCESS,
			payload: data.blogs,
		});
	} catch (err) {
		if (err.response) {
			const {
				response: {
					data: { error },
				},
			} = err;

			dispatch({
				type: GET_ERROR,
				payload: error,
			});
		}
		dispatch({
			type: GET_ALL_BLOG_FAIL,
		});
		dispatch(clearLoading(false));
	}
};

// getUserBlog ACTION
export const getUserBlog = () => async (dispatch) => {
	const token = getCookie('token');
	try {
		dispatch(setLoading(true));

		const { data } = await axios.get('/userblogs', {
			headers: {
				'Content-Type': 'multipart/form-data',
				Authorization: `Bearer ${token}`,
			},
		});

		dispatch(clearLoading(false));
		dispatch({
			type: GET_USER_BLOG_SUCCESS,
			payload: data.blogs,
		});
	} catch (err) {
		if (err.response) {
			const {
				response: {
					data: { error },
				},
			} = err;

			dispatch({
				type: GET_ERROR,
				payload: error,
			});
		}
		dispatch({
			type: GET_USER_BLOG_FAIL,
		});
		dispatch(clearLoading(false));
	}
};

// getUserBlog ACTION
export const getBlogDetail = (id) => async (dispatch) => {
	try {
		dispatch(setLoading(true));

		const { data } = await axios.get(`/blogdetail/${id}`);

		dispatch(clearLoading(false));
		dispatch({
			type: GET_BLOG_DETAIL_SUCCESS,
			payload: data.blogDetail,
		});
	} catch (err) {
		if (err.response) {
			const {
				response: {
					data: { error },
				},
			} = err;

			dispatch({
				type: GET_ERROR,
				payload: error,
			});
		}
		dispatch({
			type: GET_BLOG_DETAIL_FAIL,
		});
		dispatch(clearLoading(false));
	}
};
