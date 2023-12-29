import React, { FC, ReactNode } from 'react';

type PropsType = {
  children: ReactNode;
};
export const OtherColum: FC<PropsType> = ({ children }) => {
  return (
    <div className=' grid col-start-[15] col-end-[21] content-start '>
      {children}
    </div>
  );
};
