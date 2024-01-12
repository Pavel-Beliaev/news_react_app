import React from 'react';
import { Navigation } from '../../Navigation';
import { NAVBARITEMS } from '../../../mock';

export const DropDownPanel = () => {
  return (
    <div className='fixed flex justify-center bg-yellow-50 shadow-xl w-full  top-0 left-0 z-10'>
      <Navigation itemsArray={NAVBARITEMS} />
    </div>
  );
};
