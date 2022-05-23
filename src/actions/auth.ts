import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from '../types/authTypes';
import messageSlice from '../reducers/message';
import AuthService from '../services/authService';
import { Dispatch } from 'redux';
 
export const register = (
    username: string, 
    email: string, 
    password: string) => async (dispatch: Dispatch) => {
    try {
        const response = await AuthService.register(username, email, password);
        dispatch({
            type: REGISTER_SUCCESS
        });
        dispatch(messageSlice.actions.setMessage(response.data.message));
    } catch (error: any) {
        const message = 
        (error.response &&
            error.response.data &&
            error.response.data.message) ||
        error.message ||
        error.toString();
        dispatch({
            type: REGISTER_FAIL
        });
        dispatch(messageSlice.actions.setMessage(message));
    }
};

export const login = (username: string, password: string) => async (dispatch: Dispatch) => {
    try {
        const data = await AuthService.login(username, password);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: { user: data }
        });
    } catch (error: any) {
        const message =
        (error.response &&
            error.response.data &&
            error.response.data.message) ||
        error.message ||
        error.toString();
        dispatch({
            type: LOGIN_FAIL
        });
        dispatch(messageSlice.actions.setMessage(message));
    }
};

export const logout = () => async (dispatch: Dispatch) => {
    try {
        await AuthService.logout();
    } finally {
        dispatch({
            type: LOGOUT
        });
    }
};