import React, { FC } from 'react';
import { HeaderButton } from '../../CustomButton';
import { SVG } from '../../../assets/SVG';

export const ShareBar: FC = () => {
  return (
    <div className='container flex gap-x-2.5 border-b border-[#C7C7C7] pb-3.5'>
      <HeaderButton onClick={() => {}} skin='share'>
        <SVG.ShareIcon w='30' h='30' fill='transparent' />
      </HeaderButton>
      <HeaderButton onClick={() => {}} skin='share'>
        <SVG.SaveIcon w='30' h='30' stroke='transparent' />
      </HeaderButton>
      <HeaderButton onClick={() => {}} skin='share'>
        <SVG.CommentsIcon
          w='30'
          h='30'
          fill='transparent'
          stroke='transparent'
        />
        <span className='p-0.5'>Comments {0}</span>
      </HeaderButton>
    </div>
  );
};
