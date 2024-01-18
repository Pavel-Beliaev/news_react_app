import React, { FC, ReactNode } from 'react';

type PropsType = {
  children: ReactNode;
};
export const Comments: FC<PropsType> = ({ children }) => {
  return (
    <div className='flex flex-col gap-y-2.5 flex-[0_1_90%] overflow-x-hidden my-scroll'>
      {children}
    </div>
  );
};
