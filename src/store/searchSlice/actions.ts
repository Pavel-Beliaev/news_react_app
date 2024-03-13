import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FetchDataType, ParamsType, SearchPageDataType } from './types';
import { adapter } from './adapter';

export const fetchSearchNews = createAsyncThunk<SearchPageDataType, ParamsType>(
  'search/fetchSearchNews',
  async (params) => {
    const { query, sort, page } = params;
    const key = 'DOSr30AZCOpEEHQsUMVpfn5JyqFRZ8qb';
    const { data } = await axios.get<FetchDataType>(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${key}&q=${query}&page=${page}&sort=${sort}`,
    );
    return adapter(data.response);
  },
);
