import { createSlice } from '@reduxjs/toolkit';
import { fetchNews } from './actions';
import { DataSliceType } from './types';

const initialState: DataSliceType = {
  status: 'loading',
  message: null,
  mainNewsBlock: {
    leftColumn: [],
    rightColumn: {
      opinions: [],
      sundayreview: [],
    },
  },
  moreNewsBlock: {
    leftColumn: [],
    centerColumn: [],
    rightColumn: [],
  },
  cultureNewsBlock: {
    leftColumn: [],
    rightColumn: [],
  },
};

export const newsData = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNews.pending, (state) => {
      state.status = 'loading';
      state.message = null;
    });
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.status = 'success';
      state.mainNewsBlock.leftColumn = action.payload.mainNewsBlock.leftColumn;
      state.mainNewsBlock.rightColumn.opinions =
        action.payload.mainNewsBlock.rightColumn.opinions;
      state.mainNewsBlock.rightColumn.sundayreview =
        action.payload.mainNewsBlock.rightColumn.sundayreview;
      state.moreNewsBlock.leftColumn = action.payload.moreNewsBlock.leftColumn;
      state.moreNewsBlock.centerColumn =
        action.payload.moreNewsBlock.centerColumn;
      state.moreNewsBlock.rightColumn =
        action.payload.moreNewsBlock.rightColumn;
      state.cultureNewsBlock.leftColumn =
        action.payload.cultureNewsBlock.leftColumn;
      state.cultureNewsBlock.rightColumn =
        action.payload.cultureNewsBlock.rightColumn;
    });
    builder.addCase(fetchNews.rejected, (state, action) => {
      state.status = 'error';
      state.message = action.error.message;
    });
  },
});

// eslint-disable-next-line no-empty-pattern
export const {} = newsData.actions;
export default newsData.reducer;
