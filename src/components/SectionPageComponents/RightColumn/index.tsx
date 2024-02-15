import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { sectionsSlice } from '../../../store';
import { Post } from '../../Posts';
import { parserURL } from '../../../utils';
import { isNotEmpty } from '../../../utils/isEmptyMedia';

export const RightColumn: FC = () => {
  const {
    topNews: { rightColumn },
  } = useSelector(sectionsSlice);

  return (
    <div className='col-start-[17] col-end-[21] grid gap-y-2.5'>
      {rightColumn.map((n) => (
        <Post
          key={n.url}
          type='imgInner'
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
          img={isNotEmpty(n.multimedia, 1, 'url')}
          byline={n.byline}
          size='L'
          time={n.created_date}
          idArticle={parserURL(n.uri)}
        />
      ))}
    </div>
  );
};
