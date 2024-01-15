import React, { FC } from 'react';
import { ErrorButton } from './ErrorButton';
import { ErrorDescription } from './ErrorDescription';
import { ErrorTitle } from './ErrorTitle';

export const Error: FC = () => {
  return (
    <div className='container p-3.5 flex flex-col items-center gap-y-6 '>
      <ErrorTitle />
      <ErrorDescription />
      <ErrorButton />
    </div>
  );
};
