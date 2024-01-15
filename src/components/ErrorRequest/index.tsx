import React, { FC } from 'react';
import { Error } from '../Error';

export const ErrorRequest: FC = () => {
  return (
    <div className='fixed w-screen h-screen flex justify-center items-center bg-gray-900/60 z-30 text-white'>
      <Error />
    </div>
  );
};
