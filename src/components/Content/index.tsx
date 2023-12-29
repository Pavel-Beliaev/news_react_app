import React, { FC, ReactNode } from 'react';

type PropsType = {
  children: ReactNode;
  className?: string;
};
export const Content: FC<PropsType> = ({ className, children }) => {
  return (
    <div
      className={`container grid grid-cols-[repeat(20,2fr)] gap-x-[33px] ${className}`}>
      {children}
    </div>
  );
};
