import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { sectionsSlice } from '../../../store';
import { Post } from '../../Posts';
import { parserURL } from '../../../utils';

export const RightColumn: FC = () => {
  const {
    topNews: { rightColumn },
  } = useSelector(sectionsSlice);

  return (
    <div className='col-start-[16] col-end-[21] grid gap-y-2.5'>
      {rightColumn.map((n) => (
        <Post
          type='imgRight'
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
          img={n.multimedia[1].url}
          byline={n.byline}
          size='L'
          time='4'
          idArticle={parserURL(n.uri)}
        />
      ))}
    </div>
  );
};
