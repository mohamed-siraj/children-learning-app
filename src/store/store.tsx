import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth.slice';
import postSlice from './slices/post.slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    post : postSlice
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;