import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { DropMenu } from '../DropMenu';

const NAVBAR = ['U.S.', 'World', 'Business', 'Arts', 'Lifestyle', 'Opinion'];

export const Navbar = () => {
  const [isAble, setIsAble] = useState(false);

  const showDropMenu = () => {
    setIsAble(true);
  };
  const hideDropMenu = useCallback(() => {
    setIsAble(false);
  }, []);

  return (
    <div className='relative'>
      <ul className='flex justify-center border-y-2 border-black'>
        {NAVBAR.map((el) => (
          <li
            key={el}
            onMouseEnter={showDropMenu}
            className='flex items-center px-3.5 py-2.5 cursor-pointer hover:shadow hover:underline '>
            <Link to='/'>{el}</Link>
          </li>
        ))}
      </ul>
      {/*{isAble && <DropMenu onHandler={hideDropMenu} />}*/}
    </div>
  );
};
