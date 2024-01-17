import React, { FC } from 'react';
import { Image } from '../../Image';

type PropsType = {
  img: string;
  description: string;
};
export const ArticlePoster: FC<PropsType> = ({ img, description }) => {
  return (
    <div className='container flex flex-col gap-y-3.5'>
      <Image url={img} />
      <p className='text-[15px] leading-[20px] font-serif text-[#727272]'>
        {description}
      </p>
    </div>
  );
};
