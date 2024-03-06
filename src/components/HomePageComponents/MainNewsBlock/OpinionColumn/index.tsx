import React, { FC } from 'react';
import { Heading } from '../../../Heading';
import { useSelector } from 'react-redux';
import { Post } from '../../../Posts';
import { newsSlice } from '../../../../store';
import { parserURL } from '../../../../utils';
import { isNotEmpty } from '../../../../utils/isEmptyMedia';
import { Skeletons } from '../../../Skeletons';

export const OpinionColumn: FC = () => {
  const {
    mainNewsBlock: {
      rightColumn: { opinions },
    },
    status,
  } = useSelector(newsSlice);

  return (
    <div>
      <Heading heading='Opinion' />
      <div className='grid grid-cols-[repeat(2,2fr)] gap-[10px] border-b pb-[24px] border-black'>
        {status === 'success' ? (
          opinions.map((n) => (
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
                  img: isNotEmpty(n.multimedia, 0, 'url'),
                  copyright: isNotEmpty(n.multimedia, 0, 'copyright'),
                  caption: isNotEmpty(n.multimedia, 0, 'caption'),
                  description: n.abstract,
                }}
                title={n.title}
                size='S'
                time={n.created_date}
                idArticle={parserURL(n.uri)}
                isShare
                img={isNotEmpty(n.multimedia, 1, 'url')}
                copyright={isNotEmpty(n.multimedia, 1, 'copyright')}
              />
            </div>
          ))
        ) : (
          <Skeletons.SkeletonImage count={4} />
        )}
      </div>
    </div>
  );
};
