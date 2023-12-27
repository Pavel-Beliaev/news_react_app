import React, { FC } from 'react';

type PropsType = {
  author: string;
};
export const Author: FC<PropsType> = ({ author }) => {
  return (
    <span className='text-[11px] text-[#727272] uppercase tracking-[1px]'>
      {author}
    </span>
  );
};
