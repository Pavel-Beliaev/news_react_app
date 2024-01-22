import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ArticleDataSLice, ArticleDataType } from './types';

const getArticle = () => {
  const data = localStorage.getItem('article');
  return data ? JSON.parse(data) : {};
};

const initialState: ArticleDataSLice = {
  data: getArticle(),
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
