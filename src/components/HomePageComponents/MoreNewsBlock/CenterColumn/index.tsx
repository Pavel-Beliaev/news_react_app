import React, { FC } from 'react';
import { Post } from '../../../Posts';
import { useSelector } from 'react-redux';
import { newsSlice } from '../../../../store';
import { parserURL } from '../../../../utils';
import { isNotEmpty } from '../../../../utils/isEmptyMedia';
import { Skeletons } from '../../../Skeletons';

export const CenterColumn: FC = () => {
  const {
    moreNewsBlock: { centerColumn },
    status,
  } = useSelector(newsSlice);
  const isArray = Array.isArray(centerColumn);

  return (
    <div className='grid col-start-[6] col-end-[15]'>
      {!isArray && status === 'success' ? (
        <Post
          type='imgUpDown'
          articleData={{
            title: centerColumn.title,
            byline: centerColumn.byline,
            url: centerColumn.url,
            created_date: centerColumn.created_date,
            img: isNotEmpty(centerColumn.multimedia, 0, 'url'),
            copyright: isNotEmpty(centerColumn.multimedia, 0, 'copyright'),
            caption: isNotEmpty(centerColumn.multimedia, 0, 'caption'),
            description: centerColumn.abstract,
          }}
          title={centerColumn.title}
          size='M'
          time={centerColumn.created_date}
          idArticle={parserURL(centerColumn.uri)}
          description={centerColumn.abstract}
          img={isNotEmpty(centerColumn.multimedia, 1, 'url')}
          copyright={isNotEmpty(centerColumn.multimedia, 1, 'copyright')}
          isShare
        />
      ) : (
        <Skeletons.SkeletonImage />
      )}
    </div>
  );
};
