import { createSlice } from '@reduxjs/toolkit';
import { fetchSectionsNews } from './actions';
import { SectionsSliceType } from './types';

const initialState: SectionsSliceType = {
  status: 'loading',
  message: null,
  code: '',
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
    builder.addCase(fetchSectionsNews.rejected, (state, action) => {
      state.status = 'error';
      if (action.error.message) {
        state.code = action.error.message.split(' ').slice(-1).join('');
        state.message = action.error.message;
      }
    });
  },
});
export const { setClear } = sectionsNews.actions;
export default sectionsNews.reducer;
