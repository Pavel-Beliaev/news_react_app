import React, { FC } from 'react';
import { Post } from '../../../Posts';
import { NewsType } from '../../../../store/mainNewsSlice/types';
import { parserURL } from '../../../../utils/parserURL';

type PropsType = {
  news: NewsType[];
  className?: string;
};
export const CultureRightColumn: FC<PropsType> = ({ news, className }) => {
  return (
    <div className={`grid grid-cols-2 gap-8 relative ${className}`}>
      {news.map((n, i) => (
        <div key={n.url} className={`${i % 2 === 0 ? 'delimiter' : ''}`}>
          <Post.TextCardWithImgY
            article={parserURL(n.uri)}
            title={n.title}
            text={n.abstract}
            time='4'
            size='S'
            isShare
            url={n.multimedia[1].url}
          />
        </div>
      ))}
    </div>
  );
};
