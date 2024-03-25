import React, { FC } from 'react';

export const Loader: FC = () => {
  return (
    <div className='relative flex justify-center items-center p-[24px]'>
      <div className='circle' />
      <div className='circle-inner-top' />
      <div className='circle-inner-right' />
    </div>
  );
};
