import React, { FC } from 'react';

type PropsType = {
  code: string;
};
export const ErrorTitle: FC<PropsType> = ({ code }) => {
  return <h2 className='font-bold text-6xl flex'>Error: {code}</h2>;
};
