import React, { FC } from 'react';
import { Logo } from '../Logo';
import { Navbar } from '../Navbar';

export const Content: FC = () => {
  return (
    <div className='container flex flex-col gap-y-0.5'>
      <div className='flex justify-center border-b-4 border-black py-2.5'>
        <Logo size='text-6xl' />
      </div>
      <Navbar />
      {/*<MainColum />*/}
      {/*<OtherColum />*/}
    </div>
  );
};
// grid grid-cols-[repeat(20,2fr)] gap-x-[33px] border-y-2 border-black mt-0.5 py-5
