import React from 'react';
import { MainNewsCard } from '../../MainNewsCard';
import { useSelector } from 'react-redux';
import { newsSlice } from '../../../../store/slice';

export const MainColumn = () => {
  const { data } = useSelector(newsSlice);

  return (
    <div className='flex flex-col gap-y-3.5'>
      {data.map((groupNews, i) => (
        <MainNewsCard key={i} news={groupNews} />
      ))}
    </div>
  );
};
