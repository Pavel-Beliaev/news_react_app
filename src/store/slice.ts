import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import axios from 'axios';
import { groupByArrays } from '../utils/groupByArrays';

export const fetchTopStories = createAsyncThunk(
  'news/fetchTopStories',
  async () => {
    const key = 'DOSr30AZCOpEEHQsUMVpfn5JyqFRZ8qb';
    const { data } = await axios.get(
      `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${key}`,
    );
    return data;
  },
);

export const fetchSundayreview = createAsyncThunk(
  'news/fetchSundayreview',
  async () => {
    const key = 'DOSr30AZCOpEEHQsUMVpfn5JyqFRZ8qb';
    const { data } = await axios.get(
      `https://api.nytimes.com/svc/topstories/v2/sundayreview.json?api-key=${key}`,
    );
    return data;
  },
);

export const fetchMoreNews = createAsyncThunk(
  'news/fetchMoreNews',
  async () => {
    const key = 'DOSr30AZCOpEEHQsUMVpfn5JyqFRZ8qb';
    const { data } = await axios.get(
      `https://api.nytimes.com/svc/topstories/v2/nyregion.json?api-key=${key}`,
    );
    return data;
  },
);

export const fetchWorldNews = createAsyncThunk(
  'news/fetchWorldNews',
  async () => {
    // const {} = params;
    const key = 'DOSr30AZCOpEEHQsUMVpfn5JyqFRZ8qb';
    const { data } = await axios.get(
      `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${key}`,
    );

    return data;
  },
);

type MediaType = {
  copyright: string;
  url: string;
};

export type NewsType = {
  abstract: string;
  byline: string;
  des_facet: string[];
  multimedia: MediaType[];
  title: string;
  url: string;
  section: string;
  kicker: string;
  subsection: string;
};

export type NewsDataSlice = {
  data: NewsType[][];
  opinions: NewsType[];
  sundayreview: NewsType[];
  moreNews: NewsType[][];
};

const initialState: NewsDataSlice = {
  data: [],
  opinions: [],
  sundayreview: [],
  moreNews: [],
};

export const newsData = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTopStories.pending, () => {});
    builder.addCase(fetchTopStories.fulfilled, (state, action) => {
      state.data = groupByArrays(
        action.payload.results.filter(
          (n: NewsType, i: number) => i < 15 && n.section !== 'opinion',
        ),
      );
      state.opinions = action.payload.results.filter(
        (n: NewsType) => n.section === 'opinion',
      );
      state.moreNews[0] = action.payload.results.filter(
        (n: NewsType, i: number, arr: NewsType[]) =>
          i > arr.length - 6 && i !== arr.length - 1,
      );
    });
    builder.addCase(fetchTopStories.rejected, () => {
      console.log('error');
    });
    builder.addCase(fetchSundayreview.pending, () => {});
    builder.addCase(fetchSundayreview.fulfilled, (state, action) => {
      state.sundayreview = action.payload.results.filter(
        (n: NewsType, i: number) => i < 8,
      );
    });
    builder.addCase(fetchSundayreview.rejected, () => {
      console.log('error');
    });
    builder.addCase(fetchMoreNews.pending, () => {});
    builder.addCase(fetchMoreNews.fulfilled, (state, action) => {
      state.moreNews[1] = action.payload.results.filter(
        (n: NewsType, i: number) => i < 5,
      );
    });
    builder.addCase(fetchMoreNews.rejected, () => {
      console.log('error');
    });
  },
});

// eslint-disable-next-line no-empty-pattern
export const {} = newsData.actions;
export const newsSlice = (state: RootState) => state.news;
export default newsData.reducer;
