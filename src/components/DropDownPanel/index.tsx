import React, { FC } from 'react';
import { NAVBARITEMS } from '../../mock';
import { Navigation } from '../HomePageComponents/Navbar';

type PropsType = {
  isShow: boolean;
};
export const DropDownPanel: FC<PropsType> = ({ isShow }) => {
  return (
    <div
      className={`fixed flex justify-center bg-yellow-50 shadow-xl w-full py-2 top-[0] left-0 z-10 transition-all ${
        isShow ? '' : 'translate-y-[-100%]'
      }`}>
      <Navigation itemsArray={NAVBARITEMS} />
    </div>
  );
};
