import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

type PropsType = {
  size: string;
};
export const Logo: FC<PropsType> = ({ size }) => {
  return (
    <h1
      className={`font-["Grenze_Gotisch"] ${size} tracking-widest shadowed-text`}>
      <NavLink to='/'>Echo of World</NavLink>
    </h1>
  );
};
