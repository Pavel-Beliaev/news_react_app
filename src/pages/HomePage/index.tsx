import React from 'react';
import { Logo } from '../../components/Logo';
import { Navbar } from '../../components/Navbar';

export const HomePage = () => {
  return (
    <>
      <div className='flex justify-center border-b-4 border-black py-2.5'>
        <Logo size='text-6xl' />
      </div>
      <Navbar />
      {/*<MainColum />*/}
      {/*<OtherColum />*/}
    </>
  );
};
// grid grid-cols-[repeat(20,2fr)] gap-x-[33px] border-y-2 border-black mt-0.5 py-5
