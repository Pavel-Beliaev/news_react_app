import React, { FC } from 'react';
import { COPYRIGHTPANEL } from '../../../mock';
import { NavLink } from 'react-router-dom';

export const Copyright: FC = () => {
  return (
    <ul className='flex justify-evenly mb-[50px]'>
      {COPYRIGHTPANEL.map((item) => (
        <li key={item} className='py-2.5'>
          <NavLink
            to='/'
            className='text-[11px] text-[#666666] hover:underline'>
            {item}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
