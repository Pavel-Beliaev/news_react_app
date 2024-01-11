import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { SearchNewsSlice } from './types';
import { fetchSearchNews } from './actions';

const initialState: SearchNewsSlice = {
  searchData: [],
  page: 1,
  sort: 'relevance',
  status: 'loading',
};

export const searchNews = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSearchNews.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchSearchNews.fulfilled, (state, action) => {
      state.status = 'success';
      state.searchData = action.payload.response.docs;
    });
    builder.addCase(fetchSearchNews.rejected, (state) => {
      state.status = 'error';
    });
  },
});

// eslint-disable-next-line no-empty-pattern
export const {} = searchNews.actions;
export const searchSlice = (state: RootState) => state.search;
export default searchNews.reducer;
