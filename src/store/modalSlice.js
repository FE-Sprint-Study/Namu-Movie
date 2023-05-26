/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modalSlice',
  initialState: { isOpen: false, item: null },
  reducers: {
    update: (state, action) => {
      return { isOpen: !state.isOpen, item: action.payload };
    },
    reset: state => {
      return { isOpen: false, item: null };
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice;
