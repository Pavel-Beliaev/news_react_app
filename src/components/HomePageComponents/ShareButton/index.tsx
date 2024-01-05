import React from 'react';
import { DotsIcon } from '../../../assets/SVG/DotsIcon';

export const ShareButton = () => {
  return (
    <button className='opacity-0 group-hover:opacity-100'>
      <DotsIcon w='14' h='14' fill='#727272' className='hover:fill-[#121212]' />
    </button>
  );
};
