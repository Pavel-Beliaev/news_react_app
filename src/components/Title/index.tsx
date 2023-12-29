import React, { FC } from 'react';

type PropsType = {
  title: string | undefined;
  size: 'S' | 'M' | 'L';
};
export const Title: FC<PropsType> = ({ size, title }) => {
  return (
    <h3
      className={`${
        size === 'L'
          ? 'text-2xl font-bold font-sans leading-6 tracking-wide'
          : size === 'M'
            ? 'text-[18px] font-bold font-serif leading-[19px]'
            : 'text-[18px] font-bold font-mono leading-[18px]'
      } group-hover:text-[#5A5A5A]`}>
      {title}
    </h3>
  );
};
