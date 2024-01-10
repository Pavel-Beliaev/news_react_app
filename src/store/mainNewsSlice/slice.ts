import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { groupByArrays } from '../../utils/groupByArrays';
import { NewsDataSlice, NewsType } from './types';
import {
  fetchCultureNews,
  fetchMoreNews,
  fetchSundayreview,
  fetchTopStories,
} from './actions';

const initialState: NewsDataSlice = {
  mainNews: {
    mainColumn: [],
    opinions: [],
    sundayreview: [],
  },
  moreNews: {
    leftColumn: [],
    centerColumn: {
      abstract: '',
      byline: '',
      des_facet: [],
      multimedia: [],
      title: '',
      url: '',
      section: '',
      kicker: '',
      subsection: '',
    },
    rightColumn: [],
  },
  cultureNews: {
    mainNews: {
      abstract: '',
      byline: '',
      des_facet: [],
      multimedia: [],
      title: '',
      url: '',
      section: '',
      kicker: '',
      subsection: '',
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
      state.mainNews.mainColumn = groupByArrays(
        action.payload.results.filter(
          (n: NewsType, i: number) => i < 15 && n.section !== 'opinion',
        ),
      );
      state.mainNews.opinions = action.payload.results.filter(
        (n: NewsType) => n.section === 'opinion',
      );
      state.moreNews.leftColumn = action.payload.results.slice(-5, -2);
      state.moreNews.centerColumn = action.payload.results.filter(
        (n: NewsType, i: number, arr: NewsType[]) =>
          i < arr.length - 1 && i === arr.length - 2,
      )[0];
      state.cultureNews.mainNews = action.payload.results.pop();
    });
    builder.addCase(fetchTopStories.rejected, () => {
      console.log('error Top Stories');
    });
    builder.addCase(fetchSundayreview.pending, () => {});
    builder.addCase(fetchSundayreview.fulfilled, (state, action) => {
      state.mainNews.sundayreview = action.payload.results.filter(
        (n: NewsType, i: number) => i < 8,
      );
    });
    builder.addCase(fetchSundayreview.rejected, () => {
      console.log('error Sunday Review');
    });
    builder.addCase(fetchMoreNews.pending, () => {});
    builder.addCase(fetchMoreNews.fulfilled, (state, action) => {
      state.moreNews.rightColumn = action.payload.results.filter(
        (n: NewsType, i: number) => i < 5,
      );
    });
    builder.addCase(fetchMoreNews.rejected, () => {
      console.log('error More News');
    });
    builder.addCase(fetchCultureNews.pending, () => {});
    builder.addCase(fetchCultureNews.fulfilled, (state, action) => {
      state.cultureNews.rightColumn = action.payload.results.slice(0, 4);
    });
    builder.addCase(fetchCultureNews.rejected, () => {
      console.log('error Culture News');
    });
  },
});

// eslint-disable-next-line no-empty-pattern
export const {} = newsData.actions;
export const newsSlice = (state: RootState) => state.news;
export default newsData.reducer;
