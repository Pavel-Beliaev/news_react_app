import React, { FC } from 'react';

type PropsType = {
  time: string;
};
export const CreatedTime: FC<PropsType> = ({ time }) => {
  return (
    <span className='text-[#888888] text-[14px] font-light leading-[17px]'>
      {time}
    </span>
  );
};
