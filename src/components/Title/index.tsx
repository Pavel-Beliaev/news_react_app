import React, { FC } from 'react';

type PropsType = {
  title: string | undefined;
  size: 'S' | 'M' | 'L';
};
export const Title: FC<PropsType> = ({ size, title }) => {
  const textStyle = (size: string): string => {
    switch (size) {
      case 'S':
        return 'text-[16px] font-mono leading-[16px] tracking-tight';
      case 'L':
        return 'text-[24px] font-sans leading-[24px] tracking-wide';
      default:
        return 'text-[21px] font-serif leading-[21px]';
    }
  };

  return (
    <h3 className={`${textStyle(size)} font-bold group-hover:text-[#5A5A5A]`}>
      {title}
    </h3>
  );
};
