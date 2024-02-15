import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { url } from './url';
import { FetchAPIDataType, HomePageDataType } from './types';
import { adapter } from './adapter';

export const fetchTopStories = createAsyncThunk<HomePageDataType>(
  'news/fetchTopStories',
  async () => {
    const { data } = await axios.get<FetchAPIDataType>(`${url.home}`);
    return adapter(data.results);
  },
);

export const fetchSundayreview = createAsyncThunk<HomePageDataType>(
  'news/fetchSundayreview',
  async () => {
    const { data } = await axios.get<FetchAPIDataType>(`${url.sundayreview}`);
    return adapter(data.results);
  },
);

export const fetchMoreNews = createAsyncThunk<HomePageDataType>(
  'news/fetchMoreNews',
  async () => {
    const { data } = await axios.get<FetchAPIDataType>(`${url.nyregion}`);
    return adapter(data.results);
  },
);

export const fetchCultureNews = createAsyncThunk<HomePageDataType>(
  'news/fetchCultureNews',
  async () => {
    const { data } = await axios.get<FetchAPIDataType>(`${url.books}`);
    return adapter(data.results);
  },
);
