import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { newsSlice } from '../../store/slice';
import { Card } from '../Card/Card';

type PropsType = {};
export const NewsLine: FC<PropsType> = ({}) => {
  const { data } = useSelector(newsSlice);

  return (
    <div className='flex flex-col gap-y-3.5'>
      {data.map((groupNews, i) => (
        <Card key={i} news={groupNews} />
      ))}
    </div>
  );
};
