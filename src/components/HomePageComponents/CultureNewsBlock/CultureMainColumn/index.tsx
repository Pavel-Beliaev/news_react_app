import React, { FC } from 'react';
import { Post } from '../../../Posts';
import { useSelector } from 'react-redux';
import { newsSlice } from '../../../../store';
import { parserURL } from '../../../../utils';

export const CultureMainColumn: FC = () => {
  const {
    cultureNews: { mainNews },
  } = useSelector(newsSlice);

  return (
    <>
      {!!mainNews.title && (
        <Post
          type='imgUpDown'
          articleData={{
            title: mainNews.title,
            byline: mainNews.byline,
            url: mainNews.url,
            created_date: mainNews.created_date,
            img: mainNews.multimedia[0].url,
            copyright: mainNews.multimedia[0].copyright,
            caption: mainNews.multimedia[0].caption,
            description: mainNews.abstract,
          }}
          title={mainNews.title}
          description={mainNews.abstract}
          size='L'
          time='5'
          idArticle={parserURL(mainNews.uri)}
          isShare
          img={mainNews.multimedia[1].url}
          copyright={mainNews.multimedia[1].copyright}
        />
      )}
    </>
  );
};
