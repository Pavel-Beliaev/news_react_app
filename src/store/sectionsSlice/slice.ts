import { createSlice } from '@reduxjs/toolkit';
import { fetchSectionsNews } from './actions';
import { SectionsSliceType } from './types';

const initialState: SectionsSliceType = {
  status: 'loading',
  message: null,
  topNews: {
    leftColumn: [],
    centerColumn: [],
    rightColumn: [],
  },
  dataSections: [],
};

export const sectionsNews = createSlice({
  name: 'sections',
  initialState,
  reducers: {
    setClear(state, action) {
      state.topNews.leftColumn = action.payload;
      state.topNews.centerColumn = action.payload;
      state.topNews.rightColumn = action.payload;
      state.dataSections = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSectionsNews.pending, (state) => {
      state.status = 'loading';
      state.message = null;
    });
    builder.addCase(fetchSectionsNews.fulfilled, (state, action) => {
      state.status = 'success';
      state.topNews.leftColumn = action.payload.topNews.leftColumn;
      state.topNews.centerColumn = action.payload.topNews.centerColumn;
      state.topNews.rightColumn = action.payload.topNews.rightColumn;
      state.dataSections = action.payload.dataSections;
    });
    builder.addCase(fetchSectionsNews.rejected, (state) => {
      state.status = 'error';
    });
  },
});
export const { setClear } = sectionsNews.actions;
export default sectionsNews.reducer;
