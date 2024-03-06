import React, { FC } from 'react';
import { MainNewsCard } from '../MainNewsCard';
import { useSelector } from 'react-redux';
import { newsSlice } from '../../../../store';
import { Skeletons } from '../../../Skeletons';

export const MainColumn: FC = () => {
  const {
    mainNewsBlock: { leftColumn },
    status,
  } = useSelector(newsSlice);
  return (
    <div className='flex flex-col gap-y-3.5'>
      {status === 'success' ? (
        leftColumn.map((groupNews, i) => (
          <MainNewsCard key={i} news={groupNews} />
        ))
      ) : (
        <Skeletons.SkeletonMainCard count={6} />
      )}
    </div>
  );
};
