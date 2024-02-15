import React, { FC } from 'react';
import { Post } from '../../../Posts';
import { useSelector } from 'react-redux';
import { newsSlice } from '../../../../store';
import { parserURL } from '../../../../utils';
import { isNotEmpty } from '../../../../utils/isEmptyMedia';

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
            img: isNotEmpty(mainNews.multimedia, 0, 'url'),
            copyright: isNotEmpty(mainNews.multimedia, 0, 'copyright'),
            caption: isNotEmpty(mainNews.multimedia, 0, 'caption'),
            description: mainNews.abstract,
          }}
          title={mainNews.title}
          description={mainNews.abstract}
          size='L'
          time={mainNews.created_date}
          idArticle={parserURL(mainNews.uri)}
          isShare
          img={isNotEmpty(mainNews.multimedia, 1, 'url')}
          copyright={isNotEmpty(mainNews.multimedia, 1, 'copyright')}
        />
      )}
    </>
  );
};
