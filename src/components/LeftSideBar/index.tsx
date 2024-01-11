import React, { FC } from 'react';
import { NAVBARITEMS } from '../../mock';
import { LeftSideBarItem } from './LeftSideBarItem';

export const LeftSideBar: FC = () => {
  return (
    <div className='fixed shadow-2xl h-full w-[15%] z-20 p-[10px_18px] flex flex-col gap-y-2.5'>
      {NAVBARITEMS.map((item) => (
        <LeftSideBarItem key={item} item={item} />
      ))}
    </div>
  );
};
