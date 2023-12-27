import React, { FC } from 'react';
import { ShareButton } from '../ShareButton';
import { Title } from '../Title';
import { Text } from '../Text';
import { Image } from '../Image';
import { TextBlock } from '../TextBlock';

type PropsType = {};
export const Post: FC<PropsType> = ({}) => {
  return (
    <div className='grid grid-cols-[repeat(14,2fr)] gap-x-[33px] pb-[24px] border-b border-black'>
      <div className='grid col-start-[1] col-end-[6]'>
        <TextBlock />
      </div>
      <div className='grid col-start-[6] col-end-[15]'>
        <Image
          url='https://static01.nyt.com/images/2023/12/27/us/politics/27dc-china-techspy-02/27dc-china-techspy-02-superJumbo.jpg'
          author=''
        />
      </div>
    </div>
  );
};
