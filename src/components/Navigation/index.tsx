import React, { FC } from 'react';
import { NavbarItem } from '../HomePageComponents/Navbar/NavbarItem';

type PropsType = {
  itemsArray: string[];
};
export const Navigation: FC<PropsType> = ({ itemsArray }) => {
  return (
    <>
      {itemsArray.map((item) => (
        <NavbarItem key={item} item={item} />
      ))}
    </>
  );
};
