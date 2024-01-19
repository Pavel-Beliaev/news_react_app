import React, { FC } from 'react';
import { CommentsForm } from './CommentsForm';
import { Comment } from './Comment';
import { Comments } from './Comments';
import { useSelector } from 'react-redux';
import { commentsSlice } from '../../store/commentSlice/slice';

export const CommentsBlock: FC = () => {
  const { comments } = useSelector(commentsSlice);
  return (
    <div className='fixed shadow-2xl h-full w-[25%] bg-yellow-50 z-20 p-[10px_18px] flex flex-col justify-between gap-y-2.5 right-0 top-0'>
      <Comments>
        {comments.map((c) => (
          <Comment key={c.id} text={c.text} name={c.name} time={c.time} />
        ))}
      </Comments>
      <CommentsForm />
    </div>
  );
};
