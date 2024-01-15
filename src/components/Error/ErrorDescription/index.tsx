import React, { FC } from 'react';

type PropsType = {
  message: string;
};
export const ErrorDescription: FC<PropsType> = ({ message }) => {
  return <p className='font-serif text-3xl'>{message}</p>;
};
