import React, { FC } from 'react';
import { NavbarItem } from './NavbarItem';
import { NAVBARITEMS } from '../../../mock';
import { Navigation } from '../../Navigation';

export const Navbar: FC = () => {
  return (
    <div className='flex justify-center border-y-2 border-black'>
      <Navigation itemsArray={NAVBARITEMS} />
    </div>
  );
};
