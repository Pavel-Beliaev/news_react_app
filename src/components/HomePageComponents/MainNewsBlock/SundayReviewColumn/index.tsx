import React, { FC } from 'react';
import { Heading } from '../../../Heading';
import { useSelector } from 'react-redux';
import { Post } from '../../../Posts';
import { newsSlice } from '../../../../store';
import { parserURL } from '../../../../utils';

export const SundayReviewColumn: FC = () => {
  const {
    mainNews: { sundayreview },
  } = useSelector(newsSlice);

  return (
    <div>
      <Heading heading='Sunday Review' />
      <div className='flex flex-col gap-y-2.5'>
        {sundayreview.map((n, i) =>
          i !== 1 && i !== 4 && i !== 7 ? (
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
              size='S'
              time='4'
              idArticle={parserURL(n.uri)}
            />
          ) : i === 1 ? (
            <Post
              key={n.url}
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
              size='S'
              time='3'
              idArticle={parserURL(n.uri)}
              img={n.multimedia[1].url}
              isShare
              isRevers
            />
          ) : (
            <Post
              key={n.url}
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
              size='S'
              time='4'
              idArticle={parserURL(n.uri)}
              isShare
              img={n.multimedia[1].url}
            />
          ),
        )}
      </div>
    </div>
  );
};
