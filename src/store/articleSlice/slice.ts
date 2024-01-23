import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleDataSLice, ArticleDataType } from './types';
import { getDataFromLocalStorage } from '../../utils';

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
export default articleData.reducer;
