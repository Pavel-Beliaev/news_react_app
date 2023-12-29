import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import axios from 'axios';

export const fetchTopStories = createAsyncThunk(
  'news/fetchTopStories',
  async () => {
    // const {} = params;
    const key = 'DOSr30AZCOpEEHQsUMVpfn5JyqFRZ8qb';
    const { data } = await axios.get(
      `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${key}`,
    );

    return data;
  },
);

export const fetchOpinions = createAsyncThunk(
  'news/fetchOpinions',
  async () => {
    // const {} = params;
    const key = 'DOSr30AZCOpEEHQsUMVpfn5JyqFRZ8qb';
    const { data } = await axios.get(
      `https://api.nytimes.com/svc/topstories/v2/opinion.json?api-key=${key}`,
    );

    return data;
  },
);

export const fetchMagazine = createAsyncThunk(
  'news/fetchMagazine',
  async () => {
    // const {} = params;
    const key = 'DOSr30AZCOpEEHQsUMVpfn5JyqFRZ8qb';
    const { data } = await axios.get(
      `https://api.nytimes.com/svc/topstories/v2/magazine.json?api-key=${key}`,
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
  data: NewsType[];
  opinions: NewsType[];
  magazine: NewsType[];
  world: NewsType[];
};

const initialState: NewsDataSlice = {
  data: [],
  opinions: [],
  magazine: [],
  world: [],
};

export const newsData = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTopStories.pending, () => {
      console.log('loading');
    });
    builder.addCase(fetchTopStories.fulfilled, (state, action) => {
      console.log('ok');
      state.data = action.payload.results;
    });
    builder.addCase(fetchTopStories.rejected, () => {
      console.log('error');
    });
    builder.addCase(fetchOpinions.pending, () => {
      console.log('loading');
    });
    builder.addCase(fetchOpinions.fulfilled, (state, action) => {
      state.opinions = action.payload.results;
    });
    builder.addCase(fetchOpinions.rejected, () => {
      console.log('error');
    });
    builder.addCase(fetchMagazine.pending, () => {
      console.log('loading');
    });
    builder.addCase(fetchMagazine.fulfilled, (state, action) => {
      state.magazine = action.payload.results;
    });
    builder.addCase(fetchMagazine.rejected, () => {
      console.log('error');
    });
    builder.addCase(fetchWorldNews.pending, () => {
      console.log('loading');
    });
    builder.addCase(fetchWorldNews.fulfilled, (state, action) => {
      state.world = action.payload.results;
    });
    builder.addCase(fetchWorldNews.rejected, () => {
      console.log('error');
    });
  },
});

// eslint-disable-next-line no-empty-pattern
export const {} = newsData.actions;
export const newsSlice = (state: RootState) => state.news;
export default newsData.reducer;
