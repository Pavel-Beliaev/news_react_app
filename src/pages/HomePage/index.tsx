import React, { FC, useRef, useState } from 'react';

import { useObserver } from '../../hoocks';
import {
  BorderLine,
  CultureNewsBlock,
  DropDownPanel,
  Logo,
  MainNewsBlock,
  MoreNewsBlock,
  Navbar,
  Wrapper,
} from '../../components';

export const HomePage: FC = () => {
  const [isShow, setIsShow] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useObserver(elementRef, (v) => setIsShow(v));

  return (
    <>
      <div className='flex justify-center border-b-4 border-black py-2.5'>
        <Logo size='text-6xl' />
      </div>
      <Navbar refElem={elementRef} />
      <DropDownPanel isShow={isShow} />
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
