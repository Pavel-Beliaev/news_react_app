import React, { FC } from 'react';
import { SVG } from '../../../assets/SVG';
import { useNavigate } from 'react-router-dom';

export const ErrorButton: FC = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className='p-[8px_25px] font-semibold bg-[#567b95] hover:bg-[#326891] text-white rounded flex items-center justify-between gap-x-3'>
      <SVG.ArrowIcon w='10' h='12' className='rotate-180' />
      Back
    </button>
  );
};
