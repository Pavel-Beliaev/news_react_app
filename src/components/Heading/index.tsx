import React, { FC } from 'react';

type PropsType = {
  heading: string;
};
export const Heading: FC<PropsType> = ({ heading }) => {
  return (
    <div className='relative flex whitespace-nowrap w-full justify-start font-bold text-[14px] mb-[14px]'>
      <h2>{heading}</h2>
    </div>
  );
};
