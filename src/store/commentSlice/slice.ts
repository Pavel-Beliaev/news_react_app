import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { CommentsSLiceType } from './types';

const initialState: CommentsSLiceType = {
  comments: [],
};

export const commentsData = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
});

export const {} = commentsData.actions;
export const commentsSlice = (state: RootState) => state.comments;
export default commentsData.reducer;
