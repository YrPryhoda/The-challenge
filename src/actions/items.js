import {createAsyncThunk} from '@reduxjs/toolkit';

const module = 'items';
const apiUrl = 'http://5af1eee530f9490014ead8c4.mockapi.io';

export const fetchItems = createAsyncThunk(
    `${module}/fetch`,
    async (payload, {rejectWithValue}) => {
        const response = await fetch(`${apiUrl}/items`);
        const data = await response.json();

        if (!response.ok) {
            throw rejectWithValue(data);
        }

        return data;
    });
