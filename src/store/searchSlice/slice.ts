import { createSlice } from '@reduxjs/toolkit';
import { SearchNewsSlice } from './types';
import { fetchSearchNews } from './actions';

const initialState: SearchNewsSlice = {
  searchData: [],
  page: 1,
  sort: 'relevance',
  status: 'loading',
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
      state.searchData = action.payload.response.docs;
    });
    builder.addCase(fetchSearchNews.rejected, (state, action) => {
      state.status = 'error';
      if (action.error.message) {
        state.code = action.error.message.split(' ').slice(-1).join('');
      }
    });
  },
});

// eslint-disable-next-line no-empty-pattern
export const {} = searchNews.actions;
export default searchNews.reducer;
