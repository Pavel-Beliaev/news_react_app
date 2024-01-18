import React, { FC } from 'react';
import { CustomButton } from '../../CustomButton';

type PropsType = {
  onEdit: () => void;
  onDelete: () => void;
};
export const CommentBar: FC<PropsType> = ({ onEdit, onDelete }) => {
  return (
    <div className='flex gap-x-2.5'>
      <CustomButton skin='form' onClick={onEdit}>
        Edit
      </CustomButton>
      <CustomButton skin='form' onClick={onDelete}>
        Delete
      </CustomButton>
    </div>
  );
};
