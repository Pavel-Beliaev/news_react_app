import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import axios from 'axios';

export const fetchNewsData = createAsyncThunk(
  'news/fetchNewsData',
  async () => {
    // const {} = params;
    const key = 'DOSr30AZCOpEEHQsUMVpfn5JyqFRZ8qb';
    const { data } = await axios.get(
      `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${key}`,
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
};

export type NewsDataSlice = {
  data: NewsType[];
};

const initialState: NewsDataSlice = {
  data: [],
};

export const newsData = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNewsData.pending, () => {
      console.log('loading');
    });
    builder.addCase(fetchNewsData.fulfilled, (state, action) => {
      console.log('ok');
      state.data = action.payload.results;
    });
    builder.addCase(fetchNewsData.rejected, () => {
      console.log('error');
    });
  },
});

// eslint-disable-next-line no-empty-pattern
export const {} = newsData.actions;
export const newsSlice = (state: RootState) => state.news;
export default newsData.reducer;
