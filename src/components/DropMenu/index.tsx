import React, { FC } from 'react';

type PropsType = {
  onHandler: () => void;
};
export const DropMenu: FC<PropsType> = ({ onHandler }) => {
  return (
    <div
      onMouseLeave={onHandler}
      className='absolute w-full h-[200px] shadow-lg z-20'>
      <div className='container'>drop</div>
    </div>
  );
};
