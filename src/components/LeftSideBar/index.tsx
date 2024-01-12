import React, { FC } from 'react';
import { NAVBARITEMS } from '../../mock';
import { LeftSideBarItem } from './LeftSideBarItem';

type PropsType = {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};
export const LeftSideBar: FC<PropsType> = ({ onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className='fixed shadow-2xl h-full w-[15%] bg-yellow-50 z-20 p-[10px_18px] flex flex-col gap-y-2.5'
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}>
      {NAVBARITEMS.map((item) => (
        <LeftSideBarItem key={item} item={item} />
      ))}
    </div>
  );
};
