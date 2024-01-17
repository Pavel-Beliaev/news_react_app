import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import news from './mainNewsSlice/slice';
import search from './searchSlice/slice';
import article from './articleSlice/slice';

export const store = configureStore({
  reducer: {
    news,
    search,
    article,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
