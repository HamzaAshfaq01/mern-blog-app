import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import blogReducer from './blog.reducer.jsx';
import msgReducer from './message.reducer';
import loadingrReducer from './loading.reducer';

const rootReducer = combineReducers({
	auth: authReducer,
	message: msgReducer,
	loading: loadingrReducer,
	blog: blogReducer,
});

export default rootReducer;
