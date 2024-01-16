import React, { FC } from 'react';
import { SVGType } from '../types';

export const SaveIcon: FC<SVGType> = ({ w, h, fill, stroke }) => {
  return (
    <svg
      width={w}
      height={h}
      fill={fill || 'currentColor'}
      stroke={stroke || 'currentColor'}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'>
      <path d='M6.75 6L7.5 5.25H16.5L17.25 6V19.3162L12 16.2051L6.75 19.3162V6ZM8.25 6.75V16.6838L12 14.4615L15.75 16.6838V6.75H8.25Z' />
    </svg>
  );
};
