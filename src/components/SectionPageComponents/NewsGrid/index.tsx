import React, { FC } from 'react';
import { Post } from '../../Posts';
import { parserURL } from '../../../utils';
import { useSelector } from 'react-redux';
import { sectionsSlice } from '../../../store';
import { isNotEmpty } from '../../../utils/isEmptyMedia';
import { Skeletons } from '../../Skeletons';

export const NewsGrid: FC = () => {
  const { dataSections, status } = useSelector(sectionsSlice);

  return (
    <div className='grid col-start-[1] col-end-[21] grid-cols-5 gap-[33px] mt-[20px] pt-[20px] border-t border-black '>
      {status === 'success' ? (
        dataSections.map((n, i) => (
          <div key={n.url} className={`${(i + 1) % 5 ? 'delimiter' : ''}`}>
            <Post
              type='gridPosts'
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
              img={isNotEmpty(n.multimedia, 1, 'url')}
              size='S'
              time={''}
              idArticle={parserURL(n.uri)}
            />
          </div>
        ))
      ) : (
        <Skeletons.SkeletonImage count={5} />
      )}
    </div>
  );
};
