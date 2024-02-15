import React, { FC } from 'react';
import { Post } from '../../../Posts';
import { NewsType } from '../../../../store';
import { parserURL } from '../../../../utils';
import { isNotEmpty } from '../../../../utils/isEmptyMedia';

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
              img: isNotEmpty(n.multimedia, 0, 'url'),
              copyright: isNotEmpty(n.multimedia, 0, 'copyright'),
              caption: isNotEmpty(n.multimedia, 0, 'caption'),
              description: n.abstract,
            }}
            title={n.title}
            description={n.abstract}
            isShare
            img={isNotEmpty(n.multimedia, 1, 'url')}
            size='S'
            time={n.created_date}
            idArticle={parserURL(n.uri)}
          />
        </div>
      ))}
    </div>
  );
};
