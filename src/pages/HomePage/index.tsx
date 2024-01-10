import React, { FC } from 'react';
import {
  BorderLine,
  CultureNewsBlock,
  Logo,
  MainNewsBlock,
  MoreNewsBlock,
  Navbar,
  Wrapper,
} from '../../components';

export const HomePage: FC = () => {
  return (
    <>
      <div className='flex justify-center border-b-4 border-black py-2.5'>
        <Logo size='text-6xl' />
      </div>
      <Navbar />
      <Wrapper.NewsBlock>
        <MainNewsBlock />
        <BorderLine />
        <MoreNewsBlock />
        <BorderLine />
        <CultureNewsBlock />
      </Wrapper.NewsBlock>
    </>
  );
};
//
