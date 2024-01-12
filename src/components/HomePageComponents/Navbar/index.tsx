import React, { FC, RefObject } from 'react';
import { NAVBARITEMS } from '../../../mock';
import { Navigation } from '../../Navigation';

type PropsType = {
  refElem: RefObject<HTMLDivElement>;
};
export const Navbar: FC<PropsType> = ({ refElem }) => {
  return (
    <div ref={refElem} className='flex justify-center border-y-2 border-black'>
      <Navigation itemsArray={NAVBARITEMS} />
    </div>
  );
};
