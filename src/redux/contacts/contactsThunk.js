import { createAsyncThunk } from '@reduxjs/toolkit';
// import * as contactsAPI from 'service/contactsAPI';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';


export const fetchAllContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, { rejectWithValue }) => {
        try {
            const contacts = await axios.get('/contacts');
            return contacts;
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