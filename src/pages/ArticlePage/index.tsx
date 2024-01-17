import React, { FC } from 'react';
import {
  ArticleDescription,
  ArticleHeading,
  ArticlePoster,
  Byline,
  OriginLink,
  ShareBar,
} from '../../components/ArticleComponents';
import { useSelector } from 'react-redux';
import { articleSlice } from '../../store/articleSlice/slice';

export const ArticlePage: FC = () => {
  const { data } = useSelector(articleSlice);
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
      <ArticleHeading title={title} subTitle={description} />
      <OriginLink url={url} />
      <ShareBar />
      <ArticlePoster img={img} description={caption} copyright={copyright} />
      <Byline byline={byline} date={created_date} />
      <ArticleDescription />
      <ArticleDescription />
      <ArticleDescription />
    </div>
  );
};
