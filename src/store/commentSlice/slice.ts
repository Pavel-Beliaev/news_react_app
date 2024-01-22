import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { CommentsSLiceType, CommentType } from './types';
import { getDataFromLocalStorage } from '../../utils/getDataFromLocalStorage';

const initialState: CommentsSLiceType = {
  comments: getDataFromLocalStorage('comments', []),
};

export const commentsData = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setComments(state, actions: PayloadAction<CommentType[]>) {
      state.comments.push(...actions.payload);
    },
    setDelete(state, actions: PayloadAction<number>) {
      state.comments = state.comments.filter((c) => c.id !== actions.payload);
    },
  },
});

export const { setComments, setDelete } = commentsData.actions;
export const commentsSlice = (state: RootState) => state.comments;
export default commentsData.reducer;
