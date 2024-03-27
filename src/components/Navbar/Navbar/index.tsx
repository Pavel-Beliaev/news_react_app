import React, { FC, memo, RefObject } from 'react';
import { NAVBARITEMS } from '../../../mock';
import { Navigation } from '../Navigation';

type PropsType = {
  refElem: RefObject<HTMLDivElement>;
};
export const Navbar: FC<PropsType> = memo(({ refElem }) => {
  return (
    <div ref={refElem} className='flex justify-center border-y-2 border-black'>
      <Navigation itemsArray={NAVBARITEMS} />
    </div>
  );
});
