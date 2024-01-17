import React, { FC } from 'react';
import {
  ArticleDescription,
  ArticleHeading,
  ArticlePoster,
  Byline,
  OriginLink,
  ShareBar,
} from '../../components/ArticleComponents';

export const ArticlePage: FC = () => {
  return (
    <div className='flex flex-col gap-y-5 my-3.5'>
      <ArticleHeading
        title='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        subTitle='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolore facere fugiat ipsum, nobis officiis.'
      />
      <OriginLink url='/' />
      <ShareBar />
      <ArticlePoster
        img='https://static01.nyt.com/images/2024/01/16/us/politics/16pol-nh-next-haley/16pol-nh-next-haley-superJumbo.jpg'
        description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eaque illum ipsam libero, maxime natus praesentium quidem quos ratione veniam? Ab accusantium, ad at consectetur consequatur dolorum ea modi sint.'
      />
      <Byline byline='By name' date='1993-03-15T14:03:56-05:00' />
      <ArticleDescription />
      <ArticleDescription />
      <ArticleDescription />
    </div>
  );
};
