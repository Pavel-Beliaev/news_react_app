import React, { FC } from 'react';

type PropsType = {
  time: string;
};
export const Time: FC<PropsType> = ({ time }) => {
  return (
    <span className='text-[10px] text-[#727272] uppercase'>
      {time} min read
    </span>
  );
};
