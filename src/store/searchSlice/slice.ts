import { createSlice } from '@reduxjs/toolkit';
import { SearchDataSliceType } from './types';
import { fetchSearchNews } from './actions';

const initialState: SearchDataSliceType = {
  searchData: [],
  page: 1,
  countResults: 0,
  sort: 'relevance',
  status: 'loading',
  message: '',
  code: '',
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
      state.searchData = action.payload.searchData;
      state.countResults = action.payload.countResults;
    });
    builder.addCase(fetchSearchNews.rejected, (state, action) => {
      state.status = 'error';
      if (action.error.message) {
        state.code = action.error.message.split(' ').slice(-1).join('');
        state.message = action.error.message;
      }
    });
  },
});

// eslint-disable-next-line no-empty-pattern
export const {} = searchNews.actions;
export default searchNews.reducer;
