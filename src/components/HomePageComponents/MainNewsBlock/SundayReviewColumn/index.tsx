import React, { FC } from 'react';
import { Heading } from '../../../Heading';
import { useSelector } from 'react-redux';
import { newsSlice } from '../../../../store/mainNewsSlice/slice';
import { Post } from '../../../Posts';
import { parserURL } from '../../../../utils/parserURL';

export const SundayReviewColumn: FC = () => {
  const {
    mainNews: { sundayreview },
  } = useSelector(newsSlice);

  return (
    <div>
      <Heading heading='Sunday Review' />
      <div className='flex flex-col gap-y-2.5'>
        {sundayreview.map((n, i) =>
          i !== 1 && i !== 4 && i !== 7 ? (
            <Post.TextCard
              article={parserURL(n.uri)}
              key={n.url}
              title={n.title}
              time='4'
              size='S'
            />
          ) : i === 1 ? (
            <Post.TextCardWithImgY
              article={n.uri}
              key={n.url}
              title={n.title}
              time='3'
              size='S'
              url={n.multimedia[1].url}
              isRevers
              isShare
            />
          ) : (
            <Post.TextCardWithImgRight
              article={parserURL(n.uri)}
              key={n.url}
              title={n.title}
              time='4'
              size='S'
              isShare
              url={n.multimedia[1].url}
            />
          ),
        )}
      </div>
    </div>
  );
};
