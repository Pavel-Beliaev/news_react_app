import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { sectionsSlice } from '../../../store';
import { Post } from '../../Posts';
import { parserURL } from '../../../utils';
import { isNotEmpty } from '../../../utils/isEmptyMedia';

export const CenterColumn: FC = () => {
  const {
    topNews: { centerColumn },
  } = useSelector(sectionsSlice);

  return (
    <div className='col-start-[12] col-end-[17] delimiter'>
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
        description={centerColumn.abstract}
        img={isNotEmpty(centerColumn.multimedia, 1, 'url')}
        copyright={isNotEmpty(centerColumn.multimedia, 1, 'copyright')}
        byline={centerColumn.byline}
        size='L'
        time={centerColumn.created_date}
        idArticle={parserURL(centerColumn.uri)}
      />
    </div>
  );
};
