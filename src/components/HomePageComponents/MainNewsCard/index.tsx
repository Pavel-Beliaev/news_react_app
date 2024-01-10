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
              <Post.TextCard
                article={parserURL(n.uri)}
                key={n.url}
                title={n.title}
                time='5'
                size={i < 1 ? 'L' : 'M'}
                text={i < 1 ? n.abstract : ''}
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
