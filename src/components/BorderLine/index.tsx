import React, { FC } from 'react';

type PropsType = {};
export const BorderLine: FC<PropsType> = ({}) => {
  return (
    <hr className='border-t border-black w-full  col-start-1 col-end-[21] my-[24px]' />
  );
};
