import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { sectionsSlice } from '../../../store';
import { Post } from '../../Posts';
import { parserURL } from '../../../utils';

export const CenterColumn: FC = () => {
  const {
    topNews: { centerColumn },
  } = useSelector(sectionsSlice);

  return (
    <div className='col-start-[11] col-end-[16] delimiter'>
      {centerColumn.multimedia.length && (
        <Post
          type='imgUpDown'
          articleData={{
            title: centerColumn.title,
            byline: centerColumn.byline,
            url: centerColumn.url,
            created_date: centerColumn.created_date,
            img: centerColumn.multimedia[0].url,
            copyright: centerColumn.multimedia[0].copyright,
            caption: centerColumn.multimedia[0].caption,
            description: centerColumn.abstract,
          }}
          title={centerColumn.title}
          description={centerColumn.abstract}
          img={centerColumn.multimedia[1].url}
          copyright={centerColumn.multimedia[1].copyright}
          byline={centerColumn.byline}
          size='L'
          time='2'
          idArticle={parserURL(centerColumn.uri)}
        />
      )}
    </div>
  );
};
