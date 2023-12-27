import React, { FC } from 'react';

type PropsType = {
  heading: string;
};
export const Heading: FC<PropsType> = ({ heading }) => {
  return (
    <div className='flex w-full justify-start font-bold text-[14px]'>
      <h2 className=''>{heading}</h2>
    </div>
  );
};
