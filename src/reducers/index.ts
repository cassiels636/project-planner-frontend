import { combineReducers } from 'redux';
import authSlice from './authSlice';
import messageSlice from './message';

const rootReducer = combineReducers({
    auth: authSlice.reducer,
    message: messageSlice.reducer
});

export default rootReducer;