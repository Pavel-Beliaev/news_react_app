import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { SectionsPageDataType, SectionsParamsType } from './types';
import { FetchAPIDataType } from '../types';
import { adapter } from './adapter';

export const fetchSectionsNews = createAsyncThunk<
  SectionsPageDataType,
  SectionsParamsType
>('sections/fetchSectionsNews', async (params) => {
  const { section } = params;
  const key = 'DOSr30AZCOpEEHQsUMVpfn5JyqFRZ8qb';
  const { data } = await axios.get<FetchAPIDataType>(
    `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${key}`,
  );
  return adapter(data.results);
});
