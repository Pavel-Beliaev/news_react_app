import React, { FC } from 'react';
import { Post } from '../../../Posts';
import { useSelector } from 'react-redux';
import { newsSlice } from '../../../../store';
import { parserURL } from '../../../../utils';

export const CenterColumn: FC = () => {
  const {
    moreNews: { centerColumn },
  } = useSelector(newsSlice);
  return (
    <div className='grid col-start-[6] col-end-[15]'>
      {centerColumn.title && (
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
          size='M'
          time={centerColumn.created_date}
          idArticle={parserURL(centerColumn.uri)}
          description={centerColumn.abstract}
          img={centerColumn.multimedia[1].url}
          copyright={centerColumn.multimedia[1].copyright}
          isShare
        />
      )}
    </div>
  );
};
