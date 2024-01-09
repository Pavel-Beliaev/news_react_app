import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import news from './mainNewsSlice/slice';
export const store = configureStore({
  reducer: {
    news,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
