import React, { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';

type PropsType = {
  url: string;
};
export const OriginLink: FC<PropsType> = memo(({ url }) => {
  return (
    <NavLink
      to={url}
      className='container flex justify-center self-center text-xl font-semibold text-blue-900 hover:underline'>
      Link to origin article on NYT
    </NavLink>
  );
});
