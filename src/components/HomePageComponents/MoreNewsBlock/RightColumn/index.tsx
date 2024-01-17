import React, { FC } from 'react';
import { Post } from '../../../Posts';
import { useSelector } from 'react-redux';
import { newsSlice } from '../../../../store/mainNewsSlice/slice';
import { parserURL } from '../../../../utils/parserURL';

export const RightColumn: FC = () => {
  const {
    moreNews: { rightColumn },
  } = useSelector(newsSlice);

  return (
    <div className='flex flex-col gap-y-2.5'>
      {rightColumn.map((n) => (
        <Post
          key={n.url}
          type='notImg'
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
          size='M'
          time='3'
          idArticle={parserURL(n.uri)}
        />
      ))}
    </div>
  );
};
