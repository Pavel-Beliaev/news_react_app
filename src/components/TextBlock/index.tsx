import React, { FC } from 'react';
import { Title } from '../Title';
import { Text } from '../Text';
import { ShareButton } from '../ShareButton';
import { Time } from '../Time';

type PropsType = {
  title: string;
  text: string;
};
export const TextBlock: FC<PropsType> = ({ text, title }) => {
  return (
    <div>
      <div className='flex flex-col'>
        <Title title={title} />
        <Text text={text} />
      </div>
      <div className='flex items-center justify-between'>
        <Time time='1' />
        <ShareButton />
      </div>
    </div>
  );
};
