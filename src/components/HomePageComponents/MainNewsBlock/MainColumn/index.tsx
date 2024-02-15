import React, { FC } from 'react';
import { MainNewsCard } from '../MainNewsCard';
import { useSelector } from 'react-redux';
import { newsSlice } from '../../../../store';

export const MainColumn: FC = () => {
  const {
    mainNewsBlock: { leftColumn },
  } = useSelector(newsSlice);
  return (
    <div className='flex flex-col gap-y-3.5'>
      {leftColumn.map((groupNews, i) => (
        <MainNewsCard key={i} news={groupNews} />
      ))}
    </div>
  );
};
