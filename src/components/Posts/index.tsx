import React, { FC } from 'react';
import { Author } from '../Author';
import { Title } from '../Title';
import { Time } from '../Time';
import { ShareButton } from '../HomePageComponents';
import { Description } from '../Description';
import { Image } from '../Image';

type TextCardType = {
  author?: string;
  title: string;
  text?: string;
  time: string;
  size: 'S' | 'M' | 'L';
};
const TextCard: FC<TextCardType> = ({ author, title, text, time, size }) => {
  return (
    <div className='flex flex-col gap-y-1 post group'>
      <div>
        {!!author && <Author author={author} />}
        <Title title={title} size={size} />
      </div>
      {!!text && <Description text={text} />}
      <div className='flex items-center justify-between'>
        <Time time={time} />
        <ShareButton />
      </div>
    </div>
  );
};

type TextCardWithImgYType = TextCardType & {
  isShare: boolean;
  by: string;
  url: string;
  imgAuthor: string;
  isRevers: boolean;
};
const TextCardWithImgY: FC<TextCardWithImgYType> = ({
  author,
  title,
  text,
  time,
  isShare,
  by,
  url,
  imgAuthor,
  size,
  isRevers,
}) => {
  return (
    <div
      className={`flex ${
        isRevers ? 'flex-col-reverse' : 'flex-col'
      } post group`}>
      <Image url={url} imgAuthor={imgAuthor} />
      <div>
        {!!author && <Author author={author} />}
        <Title title={title} size={size} />
        {!!text && <Description text={text} />}
        <div className='flex items-center justify-between'>
          <Time time={time} />
          {!!by && <span>{by}</span>}
          {isShare && <ShareButton />}
        </div>
      </div>
    </div>
  );
};

type TextCardWithImgRightType = Omit<
  TextCardWithImgYType,
  'isRevers' | 'imgAuthor'
>;
const TextCardWithImgRight: FC<TextCardWithImgRightType> = ({
  author,
  title,
  size,
  text,
  time,
  by,
  isShare,
  url,
}) => {
  return (
    <div className='grid grid-cols-[repeat(6,2fr)] gap-x-[33px] post  group'>
      <div className='grid col-start-1 col-end-5'>
        <div className='flex flex-col flex-[0_1_50%] gap-y-1'>
          {!!author && <Author author={author} />}
          <Title title={title} size={size} />
          <Description text={text} />
          <div className='flex items-center justify-between'>
            <Time time={time} />
            {!!by && <span>{by}</span>}
            {isShare && <ShareButton />}
          </div>
        </div>
      </div>

      <div className='grid col-start-5 col-end-7'>
        <Image url={url} imgAuthor='' />
      </div>
    </div>
    // <div className='flex gap-x-2 post  group'>
    //   <div className='flex flex-col flex-[0_1_50%] gap-y-1'>
    //     {!!author && <Author author={author} />}
    //     <Title title={title} size={size} />
    //     <Description text={text} />
    //     <div className='flex items-center justify-between'>
    //       <Time time={time} />
    //       {!!by && <span>{by}</span>}
    //       {isShare && <ShareButton />}
    //     </div>
    //   </div>
    //   <div className='flex-[0_1_50%]'>
    //     <Image url={url} imgAuthor='' />
    //   </div>
    // </div>
  );
};

export const Post = {
  TextCard,
  TextCardWithImgY,
  TextCardWithImgRight,
};
