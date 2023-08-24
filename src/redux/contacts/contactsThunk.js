import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';


export const fetchAllContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get('/contacts');
            return res.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (newContact, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/contacts', newContact);
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, { rejectWithValue }) => {
        try {
            const { data: { id } } = await axios.delete(`/contacts/${contactId}`);
            return id;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)