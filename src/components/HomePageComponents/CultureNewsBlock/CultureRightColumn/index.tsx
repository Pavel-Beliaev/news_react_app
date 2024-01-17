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
          <Post
            type='imgUpDown'
            articleData={{
              title: n.title,
              byline: n.byline,
              url: n.url,
              created_date: n.created_date,
              img: n.multimedia[0].url,
              copyright: n.multimedia[0].copyright,
              caption: n.multimedia[0].caption,
              description: n.abstract,
            }}
            title={n.title}
            description={n.abstract}
            isShare
            img={n.multimedia[1].url}
            size='S'
            time='4'
            idArticle={parserURL(n.uri)}
          />
        </div>
      ))}
    </div>
  );
};
