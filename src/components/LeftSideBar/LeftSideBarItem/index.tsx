import React, { FC, useState } from 'react';
import { SVG } from '../../../assets/SVG';
import { NAVBARSUBITEMS } from '../../../mock';
import { LeftSideBarSubItem } from '../LeftSideBarSubItem';
import { NavLink } from 'react-router-dom';

type PropsType = {
  item: string;
};
export const LeftSideBarItem: FC<PropsType> = ({ item }) => {
  const [isVisible, setIsVissible] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsVissible(true)}
      onMouseLeave={() => setIsVissible(false)}
      className='relative font-semibold p-[7px] w-full flex justify-between items-center hover:bg-yellow-100 hover:underline rounded'>
      <NavLink
        to={`section/${item.toLowerCase()}`}
        className='w-full text-[14px]  '>
        {item}
      </NavLink>
      <SVG.ArrowIcon w='8' h='7' />
      {isVisible && <LeftSideBarSubItem itemsArray={NAVBARSUBITEMS[item]} />}
    </div>
  );
};
