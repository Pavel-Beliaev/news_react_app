import React, { FC } from 'react';
import { Post } from '../../../Posts';
import { useSelector } from 'react-redux';
import { newsSlice } from '../../../../store/slice';

export const RightColumn: FC = () => {
  const { moreNews } = useSelector(newsSlice);
  const rightColumn = moreNews[1];

  return (
    <div className='flex flex-col gap-y-2.5'>
      {rightColumn?.map((n) => (
        <Post.TextCard title={n.title} time='3' size='M' />
      ))}
    </div>
  );
};
