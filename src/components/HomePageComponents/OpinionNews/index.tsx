import React from 'react';
import { Heading } from '../../Heading';
import { useSelector } from 'react-redux';
import { newsSlice } from '../../../store/slice';
import { Post } from '../../Posts';

export const OpinionNews = () => {
  const { opinions } = useSelector(newsSlice);

  return (
    <>
      <Heading heading='Opinion' />
      <div className='grid grid-cols-[repeat(2,2fr)] gap-[10px] border-b pb-[24px] border-black'>
        {opinions.map((n, i) => (
          <div
            key={n.url}
            className='first:col-start-1 first:col-end-3 last:col-start-1 last:col-end-3 '>
            <Post.TextCardWithImgY
              title={n.title}
              time='3'
              size='S'
              isShare
              by=''
              url={n.multimedia[1].url}
              imgAuthor={i === 0 ? n.multimedia[1].copyright : ''}
              isRevers={false}
            />
          </div>
        ))}
      </div>
    </>
  );
};
