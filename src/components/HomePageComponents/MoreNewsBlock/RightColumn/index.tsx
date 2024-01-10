import React, { FC } from 'react';
import { Post } from '../../../Posts';
import { useSelector } from 'react-redux';
import { newsSlice } from '../../../../store/mainNewsSlice/slice';
import { parserURL } from '../../../../utils/parserURL';

export const RightColumn: FC = () => {
  const {
    moreNews: { rightColumn },
  } = useSelector(newsSlice);

  return (
    <div className='flex flex-col gap-y-2.5'>
      {rightColumn.map((n) => (
        <Post.TextCard
          article={parserURL(n.uri)}
          key={n.url}
          title={n.title}
          time='3'
          size='M'
        />
      ))}
    </div>
  );
};
