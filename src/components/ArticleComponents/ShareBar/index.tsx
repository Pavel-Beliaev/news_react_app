import React, { FC } from 'react';
import { CustomButton } from '../../CustomButton';
import { SVG } from '../../../assets/SVG';

type PropsType = {
  onComments: () => void;
  commentsCount: number;
};
export const ShareBar: FC<PropsType> = ({ onComments, commentsCount }) => {
  return (
    <div className='container flex gap-x-2.5 border-t border-[#C7C7C7] pt-5'>
      <CustomButton onClick={() => {}} skin='share'>
        <SVG.ShareIcon w='30' h='30' fill='transparent' />
      </CustomButton>
      <CustomButton onClick={() => {}} skin='share'>
        <SVG.SaveIcon w='30' h='30' stroke='transparent' />
      </CustomButton>
      <CustomButton onClick={onComments} skin='share'>
        <SVG.CommentsIcon
          w='30'
          h='30'
          fill='transparent'
          stroke='transparent'
        />
        <span className='p-0.5'>Comments {commentsCount}</span>
      </CustomButton>
    </div>
  );
};
