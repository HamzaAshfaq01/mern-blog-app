import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import msgReducer from './message.reducer';
import loadingrReducer from './loading.reducer';

const rootReducer = combineReducers({
	auth: authReducer,
	message: msgReducer,
	loading: loadingrReducer,
});

export default rootReducer;
