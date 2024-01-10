import React from 'react';
import { Logo } from '../Logo';
import { COPYRIGHTPANEL, NAVBARITEMS, NAVBARSUBITEMS } from '../../mock';
import { Heading } from '../Heading';
import { NavLink } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className='container border-t-2 border-black'>
      <Logo size='text-3xl' />
      <div className='grid grid-cols-6 border-b border-[#C7C7C7] py-2.5'>
        {NAVBARITEMS.map((item) => (
          <div>
            <Heading heading={item} />
            <ul>
              {NAVBARSUBITEMS[item].map((el) => (
                <li className='w-full'>
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
    </div>
  );
};
