import React, { FC } from 'react';
import { Title } from '../Title';
import { Text } from '../Text';
import { ShareButton } from '../ShareButton';
import { Time } from '../Time';
import { Author } from '../Author';

type PropsType = {
  title?: string;
  text?: string;
  author?: string;
  time?: string;
  size: 'S' | 'M' | 'L';
};
export const TextBlock: FC<PropsType> = ({
  size,
  time,
  author,
  text,
  title,
}) => {
  return (
    <div className='flex flex-col group cursor-pointer gap-y-2'>
      <div>
        {author && <Author author={author} />}
        <Title title={title} size={size} />
      </div>
      {text && <Text text={text} />}
      <div className='flex items-center justify-between'>
        <Time time={time} />
        <ShareButton />
      </div>
    </div>
  );
};
