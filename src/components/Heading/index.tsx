import React, { FC } from 'react';

type PropsType = {
  heading: string;
};
export const Heading: FC<PropsType> = ({ heading }) => {
  return (
    <div className='relative my-[14px] flex whitespace-nowrap w-full justify-start font-bold text-[14px]'>
      <h2 className='absolute top-[-14px]'>{heading}</h2>
    </div>
  );
};
