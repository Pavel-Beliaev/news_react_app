import React, { FC } from 'react';

type PropsType = {
  text: string | undefined;
};
export const Text: FC<PropsType> = ({ text }) => {
  return <p className='text-[14px] font-serif'>{text}</p>;
};
