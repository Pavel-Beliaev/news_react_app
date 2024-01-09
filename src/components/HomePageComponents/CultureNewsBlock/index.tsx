import React from 'react';
import { Wrapper } from '../../Wrapper';
import { Heading } from '../../Heading';
import { Post } from '../../Posts';
import { useSelector } from 'react-redux';
import { newsSlice } from '../../../store/mainNewsSlice/slice';

export const CultureNewsBlock = () => {
  const {
    cultureNews: { mainNews, rightColumn },
  } = useSelector(newsSlice);
  return (
    <>
      <Heading heading='Culture and Lifestyle' />
      <Wrapper.LeftColumn>
        {!!mainNews.title && (
          <Post.TextCardWithImgY
            title={mainNews.title}
            text={mainNews.abstract}
            time='5'
            size='L'
            isShare
            by=''
            url={mainNews.multimedia[1].url}
            imgAuthor={mainNews.multimedia[1].copyright}
            isRevers={false}
          />
        )}
      </Wrapper.LeftColumn>
      <Wrapper.RightColumn>
        {rightColumn.map((n) => (
          <Post.TextCardWithImgRight
            key={n.url}
            title={n.title}
            text={n.abstract}
            time='5'
            size='S'
            isShare
            by=''
            url={n.multimedia[1].url}
          />
        ))}
      </Wrapper.RightColumn>
    </>
  );
};
