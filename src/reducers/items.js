import {createReducer} from '@reduxjs/toolkit';
import {fetchItems} from '../actions/items';

const initialState = {
    loading: false,
    error: {},
    items: []
};

export const items = createReducer(initialState, builder => builder
    .addCase(fetchItems.pending, (state) => {
        state.loading = true;
    })
    .addCase(fetchItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
    })
    .addCase(fetchItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
    })
);

export const selectItems = state => state.items;
