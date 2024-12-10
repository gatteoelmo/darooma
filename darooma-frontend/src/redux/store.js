import { configureStore } from '@reduxjs/toolkit';
import backgroundReducer from './backgroundSlice';


export const store = configureStore({
  reducer: {
    background: backgroundReducer
  },
});