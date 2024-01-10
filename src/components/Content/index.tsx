import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const Content: FC = () => {
  return (
    <div className='container flex flex-col gap-y-0.5'>
      <Outlet />
    </div>
  );
};
