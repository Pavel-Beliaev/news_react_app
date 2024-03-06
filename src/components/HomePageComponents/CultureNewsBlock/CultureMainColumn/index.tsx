import React, { FC } from 'react';
import { Post } from '../../../Posts';
import { useSelector } from 'react-redux';
import { newsSlice } from '../../../../store';
import { parserURL } from '../../../../utils';
import { isNotEmpty } from '../../../../utils/isEmptyMedia';
import { Skeletons } from '../../../Skeletons';

export const CultureMainColumn: FC = () => {
  const {
    cultureNewsBlock: { leftColumn },
    status,
  } = useSelector(newsSlice);
  const isArray = Array.isArray(leftColumn);

  return (
    <>
      {!isArray && status === 'success' ? (
        <Post
          type='imgUpDown'
          articleData={{
            title: leftColumn.title,
            byline: leftColumn.byline,
            url: leftColumn.url,
            created_date: leftColumn.created_date,
            img: isNotEmpty(leftColumn.multimedia, 0, 'url'),
            copyright: isNotEmpty(leftColumn.multimedia, 0, 'copyright'),
            caption: isNotEmpty(leftColumn.multimedia, 0, 'caption'),
            description: leftColumn.abstract,
          }}
          title={leftColumn.title}
          description={leftColumn.abstract}
          size='L'
          time={leftColumn.created_date}
          idArticle={parserURL(leftColumn.uri)}
          isShare
          img={isNotEmpty(leftColumn.multimedia, 1, 'url')}
          copyright={isNotEmpty(leftColumn.multimedia, 1, 'copyright')}
        />
      ) : (
        <Skeletons.SkeletonImage />
      )}
    </>
  );
};
