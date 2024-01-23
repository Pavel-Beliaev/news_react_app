import React, { FC } from 'react';
import { SVGType } from '../types';

export const SaveIcon: FC<SVGType> = ({ w, h, fill, stroke }) => {
  return (
    <svg
      width={w}
      height={h}
      fill={fill || 'currentColor'}
      stroke={stroke || 'currentColor'}
      viewBox='-51.2 -51.2 614.40 614.40'>
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
        stroke='#000000'
        strokeWidth='30.48'>
        <path d='M410.9,0H85.1C72.3,0,61.8,10.4,61.8,23.3V512L248,325.8L434.2,512V23.3C434.2,10.4,423.8,0,410.9,0z' />
      </g>
    </svg>
  );
};
