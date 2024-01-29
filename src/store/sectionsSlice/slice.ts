import { createSlice } from '@reduxjs/toolkit';
import { fetchSectionsNews } from './actions';
import { NewsType } from '../mainNewsSlice';

export type SectionsSliceType = {
  status: 'loading' | 'success' | 'error';
  topNews: {
    leftColumn: NewsType;
    centerColumn: NewsType;
    rightColumn: NewsType[];
  };
  dataSections: NewsType[];
  archive: [];
};

const initialState: SectionsSliceType = {
  status: 'loading',
  topNews: {
    leftColumn: {
      created_date: '',
      abstract: '',
      byline: '',
      des_facet: [],
      multimedia: [],
      title: '',
      url: '',
      section: '',
      kicker: '',
      subsection: '',
      uri: '',
    },
    centerColumn: {
      created_date: '',
      abstract: '',
      byline: '',
      des_facet: [],
      multimedia: [],
      title: '',
      url: '',
      section: '',
      kicker: '',
      subsection: '',
      uri: '',
    },
    rightColumn: [],
  },
  dataSections: [],
  archive: [],
};

export const sectionsNews = createSlice({
  name: 'sections',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSectionsNews.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchSectionsNews.fulfilled, (state, action) => {
      state.status = 'success';
      state.topNews.leftColumn = action.payload.results.filter(
        (n) => n.section !== 'admin' && n.url !== 'null',
      )[0];
      state.topNews.centerColumn = action.payload.results.filter(
        (n) => n.section !== 'admin' && n.url !== 'null',
      )[1];
      state.topNews.rightColumn = action.payload.results
        .filter((n) => n.section !== 'admin' && n.url !== 'null')
        .slice(2, 4);
      state.dataSections = action.payload.results
        .filter((n) => n.section !== 'admin' && n.url !== 'null')
        .slice(4);
    });
    builder.addCase(fetchSectionsNews.rejected, (state) => {
      state.status = 'error';
    });
  },
});

// eslint-disable-next-line no-empty-pattern
export const {} = sectionsNews.actions;
export default sectionsNews.reducer;
