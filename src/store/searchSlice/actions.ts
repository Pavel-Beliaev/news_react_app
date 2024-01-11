import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FetchDataType, ParamsType } from './types';

export const fetchSearchNews = createAsyncThunk<FetchDataType, ParamsType>(
  'search/fetchSearchNews',
  async (params) => {
    const { query, sort, page } = params;
    const key = 'DOSr30AZCOpEEHQsUMVpfn5JyqFRZ8qb';
    const { data } = await axios.get<FetchDataType>(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${key}&q=${query}&page=${page}&sort=${sort}`,
    );
    return data;
  },
);
// https://static01.nyt.com/
