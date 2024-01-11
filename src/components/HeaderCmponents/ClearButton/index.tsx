import React, { FC } from 'react';

type PropsType = {
  onClick: () => void;
};
export const ClearButton: FC<PropsType> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className='absolute text-[10px] p-[9px] text-[#b3b3b3] cursor-pointer uppercase right-0'>
      clear
    </button>
  );
};
