import React, { FC } from 'react';
import { Post } from '../../../Posts';
import { useSelector } from 'react-redux';
import { newsSlice } from '../../../../store/slice';

export const LeftColumn: FC = () => {
  const { moreNews } = useSelector(newsSlice);
  const leftColumn = moreNews[0]?.slice(0, 3);

  return (
    <div className='grid col-start-[1] col-end-[6] delimiter gap-y-2.5'>
      {leftColumn?.map((n, i) => (
        <Post.TextCard title={n.title} text={n.abstract} time='4' size='M' />
      ))}
    </div>
  );
};
