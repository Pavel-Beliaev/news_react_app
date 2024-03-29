import React, { FC } from 'react';
import { Image } from '../../../Image';
import { Post } from '../../../Posts';
import { parserURL } from '../../../../utils';
import { isNotEmpty } from '../../../../utils/isEmptyMedia';
import { NewsType } from '../../../../store/types';

type PropsType = {
  news: NewsType[];
};
export const MainNewsCard: FC<PropsType> = ({ news }) => {
  return (
    <div className='border-b pb-[24px] border-black last:border-none last:pb-0 grid-inner-left'>
      <div className='grid col-start-[1] col-end-[6] gap-y-3.5'>
        {news.map(
          (n, i) =>
            i < 2 && (
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
                size={i < 1 ? 'L' : 'M'}
                time={n.created_date}
                description={i < 1 ? n.abstract : ''}
                idArticle={parserURL(n.uri)}
                isShare
              />
            ),
        )}
      </div>
      <div className='grid col-start-[6] col-end-[15]'>
        <Image
          src={isNotEmpty(news[0].multimedia, 1, 'url')}
          imgAuthor={isNotEmpty(news[0].multimedia, 1, 'copyright')}
        />
      </div>
    </div>
  );
};
