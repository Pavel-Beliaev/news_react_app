import React, { FC } from 'react';
import { Author } from '../../Author';
import { Title } from '../../Title';
import { Time } from '../../Time';
import { ShareButton } from '../../HomePageComponents';
import { Description } from '../../Description';
import { Image } from '../../Image';

type TextCardType = {
  author?: string;
  title: string;
  text?: string;
  time: string;
  size: 'S' | 'M' | 'L';
};
const TextCard: FC<TextCardType> = ({ author, title, text, time, size }) => {
  return (
    <div className='flex flex-col gap-y-2 post group'>
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
    <div className={`flex ${isRevers ? 'flex-col-reverse' : 'flex-col'}`}>
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

type TextCardWithImgRightType = Omit<TextCardWithImgYType, 'isRevers'>;
const TextCardWithImgRight: FC<TextCardWithImgRightType> = ({
  author,
  title,
  size,
  text,
  time,
  by,
  isShare,
  url,
  imgAuthor,
}) => {
  return (
    <div>
      <div>
        {!!author && <Author author={author} />}
        <Title title={title} size={size} />
        <Description text={text} />
        <div className='flex items-center justify-between'>
          <Time time={time} />
          {!!by && <span>{by}</span>}
          {isShare && <ShareButton />}
        </div>
      </div>
      <Image url={url} imgAuthor={imgAuthor} />
    </div>
  );
};

export const Post = {
  TextCard,
  TextCardWithImgY,
  TextCardWithImgRight,
};
