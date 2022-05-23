import { createAsyncThunk, createSlice, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import AuthService from '../services/authService';
import messageSlice from './message';

type RegisterUserRequest = {
    username: string;
    email: string;
    password: string;
};

type LoginUserRequest = {
    username: string;
    password: string;
};

export const register = createAsyncThunk(
    'auth/register',
    async (request: RegisterUserRequest, thunkApi) => {
        try {
            const response: any = await AuthService.register(request.username, request.email, request.password);
            thunkApi.dispatch(messageSlice.actions.setMessage(response.data.message));

            return response.data;
        } catch (error: any) {
            const message = 
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();

            thunkApi.dispatch(messageSlice.actions.setMessage(message));
        }
    }
);

export const login = createAsyncThunk(
    'auth/login',
    async (request: LoginUserRequest, thunkApi) => {
        try {
            const data = await AuthService.login(request.username, request.password);
            return data;
        } catch (error: any) {
            const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();
            thunkApi.dispatch(messageSlice.actions.setMessage(message));
        }
    }
);

export const logout = createAsyncThunk(
    'auth/logout',
    async () => {
        await AuthService.logout();
    }
);

const userItem = localStorage.getItem('user');
const user = userItem ? JSON.parse(userItem) : undefined;

type AuthState = {
    isLoggedIn: boolean;
    isLoading: boolean;
    user?: unknown;
}

const initialState: AuthState = user ?
    { isLoggedIn: true, isLoading: false, user} :
    { isLoggedIn: false, isLoading: false };

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: (builder: ActionReducerMapBuilder<AuthState>) =>{
        builder.addCase(register.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(register.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isLoggedIn = true;
            state.user = action.payload;
        });
        builder.addCase(register.rejected, (state) => {
            state.isLoading = false;
        });
        builder.addCase(login.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isLoggedIn = true;
            state.user = action.payload;
        });
        builder.addCase(login.rejected, (state) => {
            state.isLoading = false;
        });
        builder.addCase(logout.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(logout.fulfilled, (state) => {
            state.isLoading = false;
            state.isLoggedIn = false;
        });
        builder.addCase(logout.rejected, (state) => {
            state.isLoading = false;
        });
    }
});

export default authSlice;