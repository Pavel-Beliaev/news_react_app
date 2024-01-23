import React, {
  FC,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
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
import { commentsSlice } from '../../store/commentSlice/slice';

export const ArticlePage: FC = memo(() => {
  const [isAble, setIsAble] = useState(false);
  const { data } = useSelector(articleSlice);
  const { comments } = useSelector(commentsSlice);
  const commentsCount = comments.length;

  const showComments = useCallback(() => {
    setIsAble(!isAble);
  }, [isAble]);

  useEffect(() => {
    const json = JSON.stringify(data);
    localStorage.setItem('article', json);
  }, [data]);

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
      <ShareBar onComments={showComments} commentsCount={commentsCount} />
      <ArticlePoster img={img} description={caption} copyright={copyright} />
      <Byline byline={byline} date={created_date} />
      <ArticleDescription />
      <ArticleDescription />
      <ArticleDescription />
    </div>
  );
});
