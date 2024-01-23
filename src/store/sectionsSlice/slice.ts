import { createSlice } from '@reduxjs/toolkit';
import { fetchSectionsNews } from './actions';

export type SectionsSliceType = {
  status: 'loading' | 'success' | 'error';
};

const initialState: SectionsSliceType = {
  status: 'loading',
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
      console.log(action.payload.results);
    });
    builder.addCase(fetchSectionsNews.rejected, (state) => {
      state.status = 'error';
    });
  },
});

// eslint-disable-next-line no-empty-pattern
export const {} = sectionsNews.actions;
export default sectionsNews.reducer;
