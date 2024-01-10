import React from 'react';
import { NavbarItem } from './NavbarItem';
import { NAVBARITEMS } from '../../../mock';

export const Navbar = () => {
  return (
    <div className='flex justify-center border-y-2 border-black'>
      {NAVBARITEMS.map((item) => (
        <NavbarItem key={item} item={item} />
      ))}
    </div>
  );
};
