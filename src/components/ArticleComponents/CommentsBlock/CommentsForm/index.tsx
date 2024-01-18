import React, { FC } from 'react';
import { CustomButton } from '../../../CustomButton';

export const CommentsForm: FC = () => {
  return (
    <form className='flex flex-col gap-y-2.5 flex-[0_1_10%]'>
      <div>
        <input
          placeholder='Your name'
          // value={''}
          onChange={() => {}}
          className='w-full min-w-[10%] h-[30px] border rounded border-[999999] focus-visible:border pl-2 pr-[60px]'
        />
      </div>
      <div>
        <textarea
          placeholder='Your comment'
          // value={''}
          onChange={() => {}}
          className='transition-all w-full min-w-[10%] min-h-[100px] border rounded border-[999999] focus-visible:border pl-2 pr-[60px]'
        />
      </div>
      <CustomButton skin='long'>Add Comment</CustomButton>
    </form>
  );
};
