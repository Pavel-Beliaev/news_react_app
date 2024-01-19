import React, { FC } from 'react';
import { CustomButton } from '../../CustomButton';

type PropsType = {
  onEdit: () => void;
  onDelete: () => void;
  isEdit: boolean;
};
export const CommentBar: FC<PropsType> = ({ onEdit, onDelete, isEdit }) => {
  return (
    <div className='flex gap-x-2.5'>
      <CustomButton skin='form' onClick={onEdit}>
        {isEdit ? 'Save' : 'Edit'}
      </CustomButton>
      <CustomButton skin='form' onClick={onDelete}>
        Delete
      </CustomButton>
    </div>
  );
};
