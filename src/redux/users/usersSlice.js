import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        name: '',
        email: '',
        password: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        
    }
})