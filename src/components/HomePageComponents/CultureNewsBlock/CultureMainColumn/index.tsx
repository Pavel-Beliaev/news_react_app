import React, { FC } from 'react';
import { Post } from '../../../Posts';
import { useSelector } from 'react-redux';
import { newsSlice } from '../../../../store/mainNewsSlice/slice';
import { parserURL } from '../../../../utils/parserURL';

export const CultureMainColumn: FC = () => {
  const {
    cultureNews: { mainNews },
  } = useSelector(newsSlice);

  return (
    <>
      {!!mainNews.title && (
        <Post.TextCardWithImgY
          article={parserURL(mainNews.uri)}
          title={mainNews.title}
          text={mainNews.abstract}
          time='5'
          size='L'
          isShare
          url={mainNews.multimedia[1].url}
          imgAuthor={mainNews.multimedia[1].copyright}
        />
      )}
    </>
  );
};
