import React, { FC } from 'react';

type PropsType = {
  url: string;
  author: string;
};
export const Image: FC<PropsType> = ({ url, author }) => {
  return (
    <div className='flex flex-col'>
      <div className=' flex justify-center w-full h-auto  bg-transparent rounded overflow-hidden'>
        <img className='w-full h-auto' src={url} alt='pict' />
      </div>
      <span className='flex self-end text-[#727272] text-[9px]'>
        {author} for The New York Times
      </span>
    </div>
  );
};
