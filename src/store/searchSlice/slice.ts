import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchDataSliceType } from './types';
import { fetchSearchNews } from './actions';
import { getDataFromLocalStorage } from '../../utils';

const initialState: SearchDataSliceType = {
  searchData: [],
  page: 1,
  countResults: 0,
  value: getDataFromLocalStorage('search', ''),
  sort: 'relevance',
  status: 'loading',
  message: '',
  code: '',
};

export const searchNews = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setValue(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
    setSort(state, action: PayloadAction<string>) {
      state.sort = action.payload as SearchDataSliceType['sort'];
    },
  },
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
export const { setValue, setSort } = searchNews.actions;
export default searchNews.reducer;
