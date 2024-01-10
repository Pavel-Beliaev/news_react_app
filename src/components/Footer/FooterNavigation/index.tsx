import React, { FC } from 'react';
import { NAVBARITEMS, NAVBARSUBITEMS } from '../../../mock';
import { Heading } from '../../Heading';
import { NavLink } from 'react-router-dom';

export const FooterNavigation: FC = () => {
  return (
    <div className='grid grid-cols-6 border-b border-[#C7C7C7] py-2.5'>
      {NAVBARITEMS.map((item) => (
        <div>
          <Heading heading={item} />
          <ul>
            {NAVBARSUBITEMS[item].map((el) => (
              <li key={el} className='w-full'>
                <NavLink
                  to={`page/${el.toLowerCase()}`}
                  className='inline-block hover:underline w-[110px] h-[25px] text-[14px] leading-[16px]'>
                  {el}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
