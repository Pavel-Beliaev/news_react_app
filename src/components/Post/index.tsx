import React, { FC } from 'react';
import { Image } from '../Image';
import { TextBlock } from '../TextBlock';

type PropsType = {
  title: string;
  text: string;
  url: string;
  author: string;
  isLast: boolean;
};
export const Post: FC<PropsType> = ({ isLast, title, text, author, url }) => {
  return (
    <div
      className={`grid grid-cols-[repeat(14,2fr)] gap-x-[33px] ${
        isLast ? 'border-none' : 'border-b mb-[20px] pb-[24px]'
      } border-black`}>
      <div className='grid col-start-[1] col-end-[6]'>
        <TextBlock title={title} text={text} />
      </div>
      <div className='grid col-start-[6] col-end-[15]'>
        <Image url={url} author={author} />
      </div>
    </div>
  );
};
