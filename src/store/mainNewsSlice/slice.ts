import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCultureNews,
  fetchMoreNews,
  fetchSundayreview,
  fetchTopStories,
} from './actions';
import { HomePageDataType } from './types';

const initialState: HomePageDataType = {
  mainNewsBlock: {
    leftColumn: [],
    rightColumn: {
      opinions: [],
      sundayreview: [],
    },
  },
  moreNewsBlock: {
    leftColumn: [],
    centerColumn: {
      created_date: '',
      abstract: '',
      byline: '',
      multimedia: [],
      title: '',
      url: '',
      section: '',
      subsection: '',
      uri: '',
    },
    rightColumn: [],
  },
  cultureNewsBlock: {
    leftColumn: {
      created_date: '',
      abstract: '',
      byline: '',
      multimedia: [],
      title: '',
      url: '',
      section: '',
      subsection: '',
      uri: '',
    },
    rightColumn: [],
  },
};

export const newsData = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTopStories.pending, () => {});
    builder.addCase(fetchTopStories.fulfilled, (state, action) => {
      state.mainNewsBlock.leftColumn = action.payload.mainNewsBlock.leftColumn;
      state.mainNewsBlock.rightColumn.opinions =
        action.payload.mainNewsBlock.rightColumn.opinions;
      state.moreNewsBlock.leftColumn = action.payload.moreNewsBlock.leftColumn;
      state.moreNewsBlock.centerColumn =
        action.payload.moreNewsBlock.centerColumn;
      state.cultureNewsBlock.leftColumn =
        action.payload.cultureNewsBlock.leftColumn;
    });
    builder.addCase(fetchTopStories.rejected, (state, action) => {
      console.log(action.error.message);
    });
    builder.addCase(fetchSundayreview.pending, () => {});
    builder.addCase(fetchSundayreview.fulfilled, (state, action) => {
      state.mainNewsBlock.rightColumn.sundayreview =
        action.payload.mainNewsBlock.rightColumn.sundayreview;
    });
    builder.addCase(fetchSundayreview.rejected, (state, action) => {
      console.log(action.error.message);
    });
    builder.addCase(fetchMoreNews.pending, () => {});
    builder.addCase(fetchMoreNews.fulfilled, (state, action) => {
      state.moreNewsBlock.rightColumn =
        action.payload.moreNewsBlock.rightColumn;
    });
    builder.addCase(fetchMoreNews.rejected, (state, action) => {
      console.log(action.error.message);
    });
    builder.addCase(fetchCultureNews.pending, () => {});
    builder.addCase(fetchCultureNews.fulfilled, (state, action) => {
      state.cultureNewsBlock.rightColumn =
        action.payload.cultureNewsBlock.rightColumn;
    });
    builder.addCase(fetchCultureNews.rejected, (state, action) => {
      console.log(action.error.message);
    });
  },
});

// eslint-disable-next-line no-empty-pattern
export const {} = newsData.actions;
export default newsData.reducer;
