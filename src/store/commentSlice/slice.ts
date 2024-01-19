import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { CommentsSLiceType, CommentType } from './types';

const initialState: CommentsSLiceType = {
  comments: [],
  id: 1,
};

export const commentsData = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setComments(state, actions: PayloadAction<CommentType[]>) {
      state.comments.push(...actions.payload);
      state.id += 1;
    },
  },
});

export const { setComments } = commentsData.actions;
export const commentsSlice = (state: RootState) => state.comments;
export default commentsData.reducer;
