import React, { FC } from 'react';
import { CustomButton } from '../../CustomButton';
import { CustomInput } from '../../CustomInput';
import { CustomTextarea } from '../../CustomTextarea';

export const CommentsForm: FC = () => {
  return (
    <form className='flex flex-col gap-y-2.5 flex-[0_1_10%]'>
      <CustomInput placeholder='Your name' value='' onChange={() => {}} />
      <CustomTextarea placeholder='Your comment' value='' onChange={() => {}} />
      <CustomButton skin='long'>Add Comment</CustomButton>
    </form>
  );
};
