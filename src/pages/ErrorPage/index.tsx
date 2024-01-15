import React, { FC } from 'react';
import { Error } from '../../components/Error';

export const ErrorPage: FC = () => {
  return (
    <div className='bg-yellow-50 w-screen h-screen flex items-center justify-center '>
      <Error />
    </div>
  );
};
