import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type MessageState = {
    message: string;
}

const initialState: MessageState = {
    message: ''
};

const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        setMessage(state: MessageState, action: PayloadAction<string>) {
            state.message = action.payload;
        },
        clearMessage(state: MessageState) {
            state.message = '';
        }
    }
});

export default messageSlice;