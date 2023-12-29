import React, { FC, ReactNode } from 'react';

type PropsType = {
  children: ReactNode;
  className?: string;
};
export const MainColum: FC<PropsType> = ({ className, children }) => {
  return (
    <div
      className={`grid col-start-1 col-end-[15] gap-y-[20px] delimiter ${className}`}>
      {children}
    </div>
  );
};
