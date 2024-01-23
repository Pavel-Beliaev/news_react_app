import React, { FC } from 'react';
import { Heading } from '../../../Heading';
import { useSelector } from 'react-redux';
import { Post } from '../../../Posts';
import { newsSlice } from '../../../../store';
import { parserURL } from '../../../../utils';

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
            <Post
              type='imgUpDown'
              articleData={{
                title: n.title,
                byline: n.byline,
                url: n.url,
                created_date: n.created_date,
                img: !!n.multimedia ? n.multimedia[0].url : '',
                copyright: !!n.multimedia ? n.multimedia[0].copyright : '',
                caption: !!n.multimedia ? n.multimedia[0].caption : '',
                description: n.abstract,
              }}
              title={n.title}
              size='S'
              time='3'
              idArticle={parserURL(n.uri)}
              isShare
              img={!!n.multimedia ? n.multimedia[1].url : ''}
              copyright={
                i === 0 && !!n.multimedia ? n.multimedia[1].copyright : ''
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};
