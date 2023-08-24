import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Notify } from 'notiflix/build/notiflix-report-aio';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = ''
}

export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            console.log('hi')
            const res = await axios.post('/users/signup', credentials);
            setAuthHeader(res.data.token);
            return res.data;
        } catch (error) {
            Notify.failure('Bad Request. Please check your input.');
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const login = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        try {
            const res = await axios.post('/users/login', credentials)
            setAuthHeader(res.data.token);
            console.log('success')
            return res.data;
        } catch (error) {
            console.log('error')
            Notify.failure('Your email or password is invalid')
            thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const refresh = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const savedToken = state.auth.token;
        if (!savedToken) {
            return thunkAPI.rejectWithValue('Unable to fetch user')
        }

        try {
            setAuthHeader(savedToken)
            const res = await axios.get('/users/current');
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const logout = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            await axios.post('/users/logout')
            clearAuthHeader()
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)