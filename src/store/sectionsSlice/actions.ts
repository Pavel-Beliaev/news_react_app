import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { SectionsParamsType } from './types';

export const fetchSectionsNews = createAsyncThunk<any, SectionsParamsType>(
  'sections/fetchSectionsNews',
  async (params) => {
    const { section } = params;
    const key = 'DOSr30AZCOpEEHQsUMVpfn5JyqFRZ8qb';
    const { data } = await axios.get<any>(
      `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${key}`,
    );
    return data;
  },
);
