import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { sectionsSlice } from '../../../store';
import { Post } from '../../Posts';
import { parserURL } from '../../../utils';

export const LeftColumn: FC = () => {
  const {
    topNews: { leftColumn },
  } = useSelector(sectionsSlice);

  return (
    <div className='col-start-[1] col-end-[11] delimiter'>
      {leftColumn.multimedia.length && (
        <Post
          type='imgUpDown'
          articleData={{
            title: leftColumn.title,
            byline: leftColumn.byline,
            url: leftColumn.url,
            created_date: leftColumn.created_date,
            img: leftColumn.multimedia[0].url,
            copyright: leftColumn.multimedia[0].copyright,
            caption: leftColumn.multimedia[0].caption,
            description: leftColumn.abstract,
          }}
          title={leftColumn.title}
          description={leftColumn.abstract}
          img={leftColumn.multimedia[1].url}
          copyright={leftColumn.multimedia[1].copyright}
          byline={leftColumn.byline}
          size='L'
          time='2'
          idArticle={parserURL(leftColumn.uri)}
        />
      )}
    </div>
  );
};
