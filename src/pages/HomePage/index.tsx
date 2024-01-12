import React, { FC, useEffect, useRef, useState } from 'react';
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
import { useObserver } from '../../hoocks/useObserver';

export const HomePage: FC = () => {
  const [isShow, setIsShow] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useObserver(elementRef, (v) => setIsShow(v));

  return (
    <>
      <div className='flex justify-center border-b-4 border-black py-2.5'>
        <Logo size='text-6xl' />
      </div>
      {isShow && <DropDownPanel />}
      <Navbar refElem={elementRef} />
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
