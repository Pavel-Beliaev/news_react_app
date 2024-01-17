import React, { FC } from 'react';
import { Image } from '../../Image';
import { Post } from '../../Posts';
import { NewsType } from '../../../store/mainNewsSlice/types';
import { parserURL } from '../../../utils/parserURL';

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
                  img: n.multimedia[0].url,
                  copyright: n.multimedia[0].copyright,
                  caption: n.multimedia[0].caption,
                  description: n.abstract,
                }}
                title={n.title}
                size={i < 1 ? 'L' : 'M'}
                time='5'
                description={i < 1 ? n.abstract : ''}
                idArticle={parserURL(n.uri)}
              />
            ),
        )}
      </div>
      <div className='grid col-start-[6] col-end-[15]'>
        <Image
          url={news[0].multimedia[1].url}
          imgAuthor={news[0].multimedia[1].copyright}
        />
      </div>
    </div>
  );
};
