import React, { FC } from 'react';

type PropsType = {
  title: string;
};
export const Category: FC<PropsType> = ({ title }) => {
  return (
    <div className='flex flex-col gap-y-2 pb-[10px] mt-2.5'>
      <h1 className='text-[44px] leading-[44px] font-bold'>
        {title + ' NEWS'}
      </h1>
    </div>
  );
};
