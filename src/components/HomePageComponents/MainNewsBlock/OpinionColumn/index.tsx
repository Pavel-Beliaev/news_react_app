import React, { FC } from 'react';
import { Heading } from '../../../Heading';
import { useSelector } from 'react-redux';
import { newsSlice } from '../../../../store/mainNewsSlice/slice';
import { Post } from '../../../Posts';
import { parserURL } from '../../../../utils/parserURL';

export const OpinionColumn: FC = () => {
  const {
    mainNews: { opinions },
  } = useSelector(newsSlice);

  return (
    <div>
      <Heading heading='Opinion' />
      <div className='grid grid-cols-[repeat(2,2fr)] gap-[10px] border-b pb-[24px] border-black'>
        {opinions.map((n, i) => (
          <div
            key={n.url}
            className={
              opinions.length < 4
                ? 'col-start-1 col-end-3'
                : 'first:col-start-1 first:col-end-3 last:col-start-1 last:col-end-3'
            }>
            <Post.TextCardWithImgY
              article={parserURL(n.uri)}
              title={n.title}
              time='3'
              size='S'
              isShare
              url={n.multimedia ? n.multimedia[1].url : ''}
              imgAuthor={
                i === 0 && n.multimedia ? n.multimedia[1].copyright : ''
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};
