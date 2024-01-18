import React, { FC } from 'react';

type PropsType = {
  name: string;
};
export const Name: FC<PropsType> = ({ name }) => {
  return <h3 className='text-[15px] font-bold'>{name}</h3>;
};
