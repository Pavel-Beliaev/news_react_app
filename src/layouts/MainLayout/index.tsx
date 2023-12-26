import React, { FC, ReactNode } from 'react';
import { Header } from '../../components/HeaderCmponents/Header';

type PropsType = {
  children: ReactNode;
};
export const MainLayout: FC<PropsType> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      {/*<div className='footer w-full bg-black text-white flex flex-col items-center justify-center'>*/}
      {/*  <div>footer</div>*/}
      {/*</div>*/}
    </>
  );
};
