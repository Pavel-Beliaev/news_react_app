import React, { FC } from 'react';
import { Title } from '../Title';
import { Text } from '../Text';
import { ShareButton } from '../ShareButton';
import { Time } from '../Time';

type PropsType = {};
export const TextBlock: FC<PropsType> = ({}) => {
  return (
    <div>
      <div className='flex flex-col'>
        <Title title='Title' className='text-3xl' />
        <Text
          text='Lorem ipsum dolor sit amet, consecrate radicalising elite. Lorem ipsum dolor sit amet, consecrate radicalising elite'
          className=''
        />
      </div>
      <div className='flex items-center justify-between'>
        <Time time='1' />
        <ShareButton />
      </div>
    </div>
  );
};
