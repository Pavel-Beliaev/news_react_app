import React, { FC } from 'react';
import { Heading } from '../../../Heading';
import { useSelector } from 'react-redux';
import { Post } from '../../../Posts';
import { newsSlice } from '../../../../store';
import { parserURL } from '../../../../utils';
import { isNotEmpty } from '../../../../utils/isEmptyMedia';
import { Skeletons } from '../../../Skeletons';

export const SundayReviewColumn: FC = () => {
  const {
    mainNewsBlock: {
      rightColumn: { sundayreview },
    },
    status,
  } = useSelector(newsSlice);

  return (
    <div>
      <Heading heading='Sunday Review' />
      <div className='flex flex-col gap-y-2.5'>
        {status === 'success' ? (
          sundayreview.map((n, i) =>
            i !== 1 && i !== 4 && i !== 7 ? (
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
                size='S'
                time={n.created_date}
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
                  img: isNotEmpty(n.multimedia, 0, 'url'),
                  copyright: isNotEmpty(n.multimedia, 0, 'copyright'),
                  caption: isNotEmpty(n.multimedia, 0, 'caption'),
                  description: n.abstract,
                }}
                title={n.title}
                size='S'
                time={n.created_date}
                idArticle={parserURL(n.uri)}
                img={isNotEmpty(n.multimedia, 1, 'url')}
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
                  img: isNotEmpty(n.multimedia, 0, 'url'),
                  copyright: isNotEmpty(n.multimedia, 0, 'copyright'),
                  caption: isNotEmpty(n.multimedia, 0, 'caption'),
                  description: n.abstract,
                }}
                title={n.title}
                size='S'
                time={n.created_date}
                idArticle={parserURL(n.uri)}
                isShare
                img={isNotEmpty(n.multimedia, 1, 'url')}
              />
            ),
          )
        ) : (
          <Skeletons.SkeletonText count={6} />
        )}
      </div>
    </div>
  );
};
