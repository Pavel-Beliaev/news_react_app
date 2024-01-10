import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

type PropsType = {
  itemsArray: string[];
};
export const NavbarSubItem: FC<PropsType> = ({ itemsArray }) => {
  return (
    <ul
      className={`absolute top-[100%] left-0 z-20 bg-yellow-50 shadow rounded grid ${
        itemsArray.length > 1 ? 'grid-cols-[1fr_1fr_1fr]' : ''
      }`}>
      {itemsArray.map((item) => (
        <NavLink to={`section/${item.toLowerCase()}`} key={item}>
          <li className='w-full p-2.5 shadow whitespace-nowrap hover:bg-yellow-100 rounded grid justify-items-center'>
            {item}
          </li>
        </NavLink>
      ))}
    </ul>
  );
};
