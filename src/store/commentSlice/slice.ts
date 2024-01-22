import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { CommentsSLiceType, CommentType } from './types';

const getMeData = () => {
  const data = localStorage.getItem('comments');
  return data ? JSON.parse(data) : [];
};

const initialState: CommentsSLiceType = {
  comments: getMeData(),
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
