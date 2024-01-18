import React, { FC } from 'react';
import { CommentsForm } from './CommentsForm';
import { Comment } from './Comment';
import { Comments } from './Comments';

export const CommentsBlock: FC = () => {
  return (
    <div className='fixed shadow-2xl h-full w-[25%] bg-yellow-50 z-20 p-[10px_18px] flex flex-col justify-between gap-y-2.5 right-0 top-0'>
      <Comments>
        <Comment />
      </Comments>
      <CommentsForm />
    </div>
  );
};
