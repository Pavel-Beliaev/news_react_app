import React, { FC } from 'react';
import { Post } from '../../../Posts';
import { useSelector } from 'react-redux';
import { newsSlice } from '../../../../store/slice';

export const CenterColumn: FC = () => {
  const { moreNews } = useSelector(newsSlice);
  const centerColumn = moreNews[0] !== undefined && moreNews[0][3];

  return (
    <div className='grid col-start-[6] col-end-[15]'>
      {!!centerColumn && (
        <Post.TextCardWithImgY
          title={centerColumn.title}
          text={centerColumn.abstract}
          time='6'
          size='M'
          isShare
          by=''
          url={centerColumn.multimedia[1].url}
          imgAuthor={centerColumn.multimedia[1].copyright}
          isRevers={false}
        />
      )}
    </div>
  );
};
