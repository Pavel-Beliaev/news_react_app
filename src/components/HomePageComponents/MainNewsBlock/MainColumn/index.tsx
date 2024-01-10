import React, { FC } from 'react';
import { MainNewsCard } from '../../MainNewsCard';
import { useSelector } from 'react-redux';
import { newsSlice } from '../../../../store/mainNewsSlice/slice';

export const MainColumn: FC = () => {
  const {
    mainNews: { mainColumn },
  } = useSelector(newsSlice);

  return (
    <div className='flex flex-col gap-y-3.5'>
      {mainColumn.map((groupNews, i) => (
        <MainNewsCard key={i} news={groupNews} />
      ))}
    </div>
  );
};
