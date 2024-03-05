import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { sectionsSlice } from '../../../store';
import { Post } from '../../Posts';
import { parserURL } from '../../../utils';
import { isNotEmpty } from '../../../utils/isEmptyMedia';

export const LeftColumn: FC = () => {
  const {
    topNews: { leftColumn },
  } = useSelector(sectionsSlice);
  const isArray = Array.isArray(leftColumn);
  return (
    <div className='col-start-[1] col-end-[12] delimiter'>
      {!isArray && (
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
          img={isNotEmpty(leftColumn.multimedia, 1, 'url')}
          copyright={isNotEmpty(leftColumn.multimedia, 1, 'copyright')}
          byline={leftColumn.byline}
          size='L'
          time={leftColumn.created_date}
          idArticle={parserURL(leftColumn.uri)}
        />
      )}
    </div>
  );
};
