import React, { FC } from 'react';
import { NewsType } from '../../store/slice';
import { TextBlock } from '../TextBlock';
import { Image } from '../Image';

type PropsType = {
  news: NewsType[];
};
export const Card: FC<PropsType> = ({ news }) => {
  return (
    <div className='border-b pb-[24px] border-black last:border-none last:pb-0 grid grid-cols-[repeat(14,2fr)] gap-x-[33px]'>
      <div className='grid col-start-[1] col-end-[6] gap-y-3.5'>
        {news.map(
          (n, i) =>
            i < 2 && (
              <TextBlock
                key={n.url}
                size={i < 1 ? 'L' : 'M'}
                text={i < 1 ? n.abstract : ''}
                title={n.title}
                time='1'
              />
            ),
        )}
      </div>
      <div className='grid col-start-[6] col-end-[15]'>
        <Image
          url={news[0].multimedia[1].url}
          author={news[0].multimedia[1].copyright}
        />
      </div>
    </div>
  );
};
