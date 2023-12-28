import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  deleteContact,
  fetchContacts,
  addContact,
} from '../services/contactService';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const resp = await fetchContacts();
      return resp;
    } catch {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const resp = await addContact(contact);
      return resp;
    } catch {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const resp = await deleteContact(id);
      return resp;
    } catch {
      return thunkAPI.rejectWithValue();
    }
  }
);