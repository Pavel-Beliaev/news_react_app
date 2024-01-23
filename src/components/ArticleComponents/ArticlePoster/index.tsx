import React, { FC, memo } from 'react';
import { Image } from '../../Image';

type PropsType = {
  img: string;
  description: string;
  copyright: string;
};
export const ArticlePoster: FC<PropsType> = memo(
  ({ img, description, copyright }) => {
    return (
      <div className='container flex flex-col gap-y-2'>
        <Image url={img} imgAuthor={copyright} />
        <p className='text-[15px] leading-[20px] font-serif text-[#727272]'>
          {description}
        </p>
      </div>
    );
  },
);
