import React, { FC } from 'react';

type PropsType = {
  avatar: string;
};
export const Avatar: FC<PropsType> = ({ avatar }) => {
  return (
    <span className='bg-gray-400 text-white p-3.5 flex items-center justify-center w-[40px] h-[40px] rounded-full'>
      {avatar}
    </span>
  );
};
