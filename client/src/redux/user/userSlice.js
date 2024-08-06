import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUSer: null,
    error: null,
    loading: false,
};

const userSlice = createSlice ({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (start) => {
            state.loading = true;
        },
        signInSuccess: (state, action) => {
            state.currentUSer = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state, action) => {
            state.action = action.payload;
            state.loading = false;
        }
    }
});

export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;

export default userSlice.reducer;