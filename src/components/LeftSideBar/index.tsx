import React, { FC } from 'react';
import { NAVBARITEMS } from '../../mock';
import { LeftSideBarItem } from './LeftSideBarItem';

type PropsType = {
  onMouse: () => void;
};
export const LeftSideBar: FC<PropsType> = ({ onMouse }) => {
  return (
    <div
      className='fixed shadow-2xl h-full w-[15%] z-20 p-[10px_18px] flex flex-col gap-y-2.5'
      onMouseLeave={onMouse}>
      {NAVBARITEMS.map((item) => (
        <LeftSideBarItem key={item} item={item} />
      ))}
    </div>
  );
};
