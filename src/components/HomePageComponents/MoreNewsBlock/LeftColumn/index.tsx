import React, { FC } from 'react';
import { Post } from '../../../Posts';
import { useSelector } from 'react-redux';
import { newsSlice } from '../../../../store/mainNewsSlice/slice';
import { parserURL } from '../../../../utils/parserURL';

export const LeftColumn: FC = () => {
  const {
    moreNews: { leftColumn },
  } = useSelector(newsSlice);

  return (
    <div className='grid col-start-[1] col-end-[6] delimiter gap-y-2.5'>
      {leftColumn.map((n) => (
        <Post.TextCard
          article={parserURL(n.uri)}
          key={n.url}
          title={n.title}
          text={n.abstract}
          time='4'
          size='M'
        />
      ))}
    </div>
  );
};
