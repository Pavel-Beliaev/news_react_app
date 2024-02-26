import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { url } from './url';
import { FetchAPIDataType, HomePageDataType } from './types';
import { adapter } from './adapter';

export const fetchNews = createAsyncThunk<HomePageDataType>(
  'news/fetchNews',
  async () => {
    const { data: topStories } = await axios.get<FetchAPIDataType>(
      `${url.home}`,
    );
    const { data: sundayReview } = await axios.get<FetchAPIDataType>(
      `${url.sundayreview}`,
    );
    const { data: moreNews } = await axios.get<FetchAPIDataType>(
      `${url.nyregion}`,
    );
    const { data: cultureNews } = await axios.get<FetchAPIDataType>(
      `${url.books}`,
    );

    return adapter(
      topStories.results,
      sundayReview.results,
      moreNews.results,
      cultureNews.results,
    );
  },
);
