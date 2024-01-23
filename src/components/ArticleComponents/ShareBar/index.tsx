import React, { FC, memo, useCallback, useState } from 'react';
import { CustomButton } from '../../CustomButton';
import { SVG } from '../../../assets/SVG';

type PropsType = {
  onComments: () => void;
  commentsCount: number;
};
export const ShareBar: FC<PropsType> = memo(({ onComments, commentsCount }) => {
  const [isAdded, setIsAdded] = useState(false);

  const addToBookmarks = useCallback(() => {
    setIsAdded(!isAdded);
  }, [isAdded]);

  return (
    <div className='container flex gap-x-2.5 border-t border-[#C7C7C7] pt-5'>
      <CustomButton onClick={() => {}} skin='share'>
        <SVG.ShareIcon w='30' h='30' fill='transparent' />
      </CustomButton>
      <CustomButton onClick={addToBookmarks} skin='share'>
        <SVG.SaveIcon
          w='30'
          h='30'
          stroke='black'
          fill={isAdded ? 'black' : 'transparent'}
        />
      </CustomButton>
      <CustomButton onClick={onComments} skin='share'>
        <SVG.CommentsIcon
          w='30'
          h='30'
          fill='transparent'
          stroke='transparent'
        />
        <span className='p-0.5'>{commentsCount}</span>
      </CustomButton>
    </div>
  );
});
