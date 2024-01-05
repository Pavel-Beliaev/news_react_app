import React from 'react';
import { Heading } from '../../Heading';
import { Post } from '../../Cards';
import { useSelector } from 'react-redux';
import { newsSlice } from '../../../store/slice';

export const SundayReviewNews = () => {
  const { sundayreview } = useSelector(newsSlice);

  return (
    <>
      <Heading heading='Sunday Review' />
      <div className='flex flex-col gap-y-2.5'>
        {sundayreview.map((n, i) =>
          i !== 1 && i !== 4 && i !== 7 ? (
            <Post.TextCard key={n.url} title={n.title} time='4' size='S' />
          ) : i === 1 ? (
            <Post.TextCardWithImgY
              title={n.title}
              time='3'
              size='S'
              isShare
              by=''
              url={n.multimedia[1].url}
              imgAuthor=''
              isRevers
            />
          ) : (
            <Post.TextCardWithImgRight
              key={n.url}
              title={n.title}
              time='4'
              size='S'
              isShare
              by=''
              url={n.multimedia[1].url}
            />
          ),
        )}
      </div>
    </>
  );
};
