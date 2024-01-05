import React from 'react';
import { Logo } from '../../components/Logo';
import {
  LifestyleNewsBlock,
  MainNewsBlock,
  MoreNewsBlock,
  Navbar,
  Wrapper,
} from '../../components';

export const HomePage = () => {
  return (
    <>
      <div className='flex justify-center border-b-4 border-black py-2.5'>
        <Logo size='text-6xl' />
      </div>
      <Navbar />
      <Wrapper.NewsBlock>
        <MainNewsBlock />
        {/*<MoreNewsBlock />*/}
        {/*<LifestyleNewsBlock />*/}
      </Wrapper.NewsBlock>
    </>
  );
};
//