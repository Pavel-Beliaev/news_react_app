import React, { FC } from 'react';
import { WrapperType } from './types';

const LeftColumn: FC<WrapperType> = ({ children }) => {
  return (
    <div className='grid col-start-1 col-end-[15] delimiter'>{children}</div>
  );
};

const RightColumn: FC<WrapperType> = ({ children }) => {
  return (
    <div className=' grid col-start-[15] col-end-[21] content-start gap-y-[24px]'>
      {children}
    </div>
  );
};

const NewsBlock: FC<WrapperType> = ({ children }) => {
  return (
    <div className='grid grid-cols-[repeat(20,2fr)] gap-x-[33px] border-y-2 border-black py-5'>
      {children}
    </div>
  );
};

export const Wrapper = {
  LeftColumn,
  RightColumn,
  NewsBlock,
};
