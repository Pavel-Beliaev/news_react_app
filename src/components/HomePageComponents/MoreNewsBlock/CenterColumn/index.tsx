import React, { FC } from 'react';
import { Post } from '../../../Posts';
import { useSelector } from 'react-redux';
import { newsSlice } from '../../../../store/mainNewsSlice/slice';

export const CenterColumn: FC = () => {
  const {
    moreNews: { centerColumn },
  } = useSelector(newsSlice);
  return (
    <div className='grid col-start-[6] col-end-[15]'>
      {centerColumn.title && (
        <Post.TextCardWithImgY
          article={centerColumn.uri}
          title={centerColumn.title}
          text={centerColumn.abstract}
          time='6'
          size='M'
          url={centerColumn.multimedia[1].url}
          imgAuthor={centerColumn.multimedia[1].copyright}
          isShare
        />
      )}
    </div>
  );
};
