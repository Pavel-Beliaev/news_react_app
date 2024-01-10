import React, { FC, useState } from 'react';
import { NAVBARSUBITEMS } from '../../../../mock';
import { NavbarSubItem } from '../NavbarSubItem';
import { NavLink } from 'react-router-dom';

type PropsType = {
  item: string;
};
export const NavbarItem: FC<PropsType> = ({ item }) => {
  const [isAble, setIsAble] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsAble(true)}
      onMouseLeave={() => setIsAble(false)}
      className='relative flex items-center px-3.5 py-2.5 cursor-pointer hover:shadow hover:underline '>
      <NavLink to={`page/${item.toLowerCase()}`}>{item}</NavLink>
      {isAble && <NavbarSubItem itemsArray={NAVBARSUBITEMS[item]} />}
    </div>
  );
};
