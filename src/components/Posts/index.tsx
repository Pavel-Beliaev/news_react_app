import React, { FC } from 'react';
import { Author } from '../Author';
import { Title } from '../Title';
import { Time } from '../Time';
import { ShareButton } from '../HomePageComponents';
import { Description } from '../Description';
import { Image } from '../Image';
import {
  TextCardType,
  TextCardWithImgRightType,
  TextCardWithImgYType,
} from './types';

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
      } post group gap-y-2.5`}>
      <Image url={url} imgAuthor={imgAuthor} />
      <div className='flex flex-col'>
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
    <div className='flex gap-x-2 post  group'>
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
      <div className='flex-[0_1_50%]'>
        <Image url={url} imgAuthor='' />
      </div>
    </div>
  );
};

export const Post = {
  TextCard,
  TextCardWithImgY,
  TextCardWithImgRight,
};
