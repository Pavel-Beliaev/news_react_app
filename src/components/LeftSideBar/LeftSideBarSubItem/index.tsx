import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

type PropsType = {
  itemsArray: string[];
};
export const LeftSideBarSubItem: FC<PropsType> = ({ itemsArray }) => {
  return (
    <ul className='absolute left-[100%] p-[10px] bg-yellow-50 shadow top-0 flex flex-col'>
      {itemsArray.map((el) => (
        <NavLink key={el} to={`section/${el.toLowerCase()}`}>
          <li className='whitespace-nowrap p-[7px] hover:bg-yellow-100'>
            {el}
          </li>
        </NavLink>
      ))}
    </ul>
  );
};
