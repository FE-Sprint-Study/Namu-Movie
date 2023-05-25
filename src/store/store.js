/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './modalSlice';

const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
  },
});

export default store;
