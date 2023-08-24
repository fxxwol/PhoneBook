import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refresh, register } from "./authThunk";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
        isLogging: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true
                state.isLogging = false;
            })
            .addCase(register.pending, (state) => {
                state.isLogging = true;
            })
            .addCase(register.rejected, (state) => {
                state.isLogging = false;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
                state.isLogging = false;
            })
            .addCase(login.pending, (state) => {
                state.isLogging = true;
            })
            .addCase(login.rejected, (state) => {
                state.isLogging = false;
            })
            .addCase(refresh.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(refresh.pending, (state) => {
                state.isRefreshing = true;
            })
            .addCase(refresh.rejected, (state) => {
                state.isRefreshing = false;
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
            })
    }
})
