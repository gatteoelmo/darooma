import { configureStore } from '@reduxjs/toolkit';
import backgroundReducer from './backgroundSlice';
import goalReducer from './goalSlice';


export const store = configureStore({
  reducer: {
    background: backgroundReducer,
    goal: goalReducer
  },
});