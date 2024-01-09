import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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

export const fetchCultureNews = createAsyncThunk(
  'news/fetchCultureNews',
  async () => {
    const key = 'DOSr30AZCOpEEHQsUMVpfn5JyqFRZ8qb';
    const { data } = await axios.get(
      `https://api.nytimes.com/svc/topstories/v2/books.json?api-key=${key}`,
    );
    return data;
  },
);
