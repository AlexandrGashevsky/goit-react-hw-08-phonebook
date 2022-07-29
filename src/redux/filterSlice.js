import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filtrate: (_, { payload }) => payload,
  },
});

export const { filtrate } = filterSlice.actions;

export const getFilter = state => state.filter;
