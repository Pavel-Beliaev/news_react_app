import React, { FC, memo } from 'react';
import { Outlet } from 'react-router-dom';

export const Content: FC = memo(() => {
  return (
    <div className='container flex flex-col gap-y-0.5'>
      <Outlet />
    </div>
  );
});
