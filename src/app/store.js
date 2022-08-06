import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import userSlice from '../features/userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice
  },
});
