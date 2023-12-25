import React, { FC } from 'react';
import { SVGType } from './types';

export const SearchIcon: FC<SVGType> = ({ w, h, fill, stroke }) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox='0 0 24 24'
      fill={fill || 'currentColor'}
      stroke={stroke || 'currentColor'}
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
        stroke='#000000'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
