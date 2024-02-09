import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { url } from './url';
export const fetchTopStories = createAsyncThunk(
  'news/fetchTopStories',
  async () => {
    const { data } = await axios.get(`${url.home}`);
    return data;
  },
);

export const fetchSundayreview = createAsyncThunk(
  'news/fetchSundayreview',
  async () => {
    const { data } = await axios.get(`${url.sundayreview}`);
    return data;
  },
);

export const fetchMoreNews = createAsyncThunk(
  'news/fetchMoreNews',
  async () => {
    const { data } = await axios.get(`${url.nyregion}`);
    return data;
  },
);

export const fetchCultureNews = createAsyncThunk(
  'news/fetchCultureNews',
  async () => {
    const { data } = await axios.get(`${url.books}`);
    return data;
  },
);
