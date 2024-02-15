import React, { FC } from 'react';
import { Post } from '../../../Posts';
import { useSelector } from 'react-redux';
import { newsSlice, NewsType } from '../../../../store';
import { parserURL } from '../../../../utils';
import { isNotEmpty } from '../../../../utils/isEmptyMedia';

export const LeftColumn: FC = () => {
  const {
    moreNews: { leftColumn },
  } = useSelector(newsSlice);

  return (
    <div className='grid col-start-[1] col-end-[6] delimiter gap-y-2.5'>
      {leftColumn.map((n) => (
        <Post
          key={n.url}
          type='notImg'
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
          size='M'
          time={n.created_date}
          idArticle={parserURL(n.uri)}
        />
      ))}
    </div>
  );
};
