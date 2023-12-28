import React, { FC } from 'react';

type PropsType = {
  title: string;
};
export const Title: FC<PropsType> = ({ title }) => {
  return (
    <h3 className='text-2xl font-bold font-serif leading-6 tracking-wide '>
      {title}
    </h3>
  );
};
