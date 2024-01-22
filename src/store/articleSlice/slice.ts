import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ArticleDataSLice, ArticleDataType } from './types';
import { getDataFromLocalStorage } from '../../utils/getDataFromLocalStorage';

const initialState: ArticleDataSLice = {
  data: getDataFromLocalStorage('article', {}),
};

export const articleData = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setArticleData(state, action: PayloadAction<ArticleDataType>) {
      state.data = action.payload;
    },
  },
});

export const { setArticleData } = articleData.actions;
export const articleSlice = (state: RootState) => state.article;
export default articleData.reducer;
