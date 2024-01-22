import React, { FC, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { articleSlice } from '../../store/articleSlice/slice';
import {
  ArticleDescription,
  ArticleHeading,
  ArticlePoster,
  Byline,
  CommentsBlock,
  OriginLink,
  ShareBar,
} from '../../components';

export const ArticlePage: FC = () => {
  const [isAble, setIsAble] = useState(false);
  const { data } = useSelector(articleSlice);

  useEffect(() => {
    const json = JSON.stringify(data);
    localStorage.setItem('article', json);
  }, [data]);

  const showComments = () => {
    setIsAble(!isAble);
  };

  const {
    byline,
    caption,
    copyright,
    created_date,
    description,
    img,
    title,
    url,
  } = data;
  return (
    <div className='flex flex-col gap-y-5 my-3.5'>
      {isAble && <CommentsBlock />}
      <ArticleHeading title={title} subTitle={description} />
      <OriginLink url={url} />
      <ShareBar onComments={showComments} />
      <ArticlePoster img={img} description={caption} copyright={copyright} />
      <Byline byline={byline} date={created_date} />
      <ArticleDescription />
      <ArticleDescription />
      <ArticleDescription />
    </div>
  );
};
