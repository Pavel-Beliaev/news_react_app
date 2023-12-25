import React, { FC } from 'react';
import { SVGType } from './types';

export const BurgerIcon: FC<SVGType> = ({ w, h, fill, stroke }) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox='0 0 24 24'
      fill={fill || 'currentColor'}
      stroke={stroke || 'currentColor'}
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M4 18L20 18'
        stroke='#000000'
        strokeWidth='2'
        strokeLinecap='round'
      />
      <path
        d='M4 12L20 12'
        stroke='#000000'
        strokeWidth='2'
        strokeLinecap='round'
      />
      <path
        d='M4 6L20 6'
        stroke='#000000'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </svg>
  );
};
