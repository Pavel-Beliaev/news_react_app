import React, { FC } from 'react';
import { NewsLine } from '../NewsLine';
import { BorderLine } from '../BorderLine';

type PropsType = {};
export const MainColum: FC<PropsType> = ({}) => {
  return (
    <div className='grid col-start-1 col-end-[15] delimiter'>
      <NewsLine />
    </div>
  );
};
