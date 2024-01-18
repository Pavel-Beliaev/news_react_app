import React, { FC } from 'react';
import { CustomButton } from '../../CustomButton';
import { CommentsContent } from './CommentsContent';
import { CommentsForm } from './CommentsForm';

export const CommentsBlock: FC = () => {
  return (
    <div className='fixed shadow-2xl h-full w-[25%] bg-yellow-50 z-20 p-[10px_18px] flex flex-col justify-between gap-y-2.5 right-0 top-0'>
      <CommentsContent>
        <div className='flex gap-x-2 border-b border-[#C7C7C7] last:border-none pb-2.5 '>
          <span className='bg-gray-400 text-white p-3.5 flex items-center justify-center w-[40px] h-[40px] rounded-full'>
            A
          </span>
          <div className='flex flex-col gap-y-2'>
            <div>
              <h3 className='text-[15px] font-bold'>Name</h3>
              <span className='text-[#888888] text-[14px] font-light leading-[17px]'>
                time
              </span>
            </div>
            <p className='text-[14px] leading-[20px]' contentEditable={'false'}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias
              aut culpa dignissimos distinctio fugiat iusto nesciunt nulla omnis
              sint! Cupiditate dicta distinctio doloremque esse impedit, iste
              officiis omnis possimus.
            </p>
            <div className='flex gap-x-2.5'>
              <CustomButton skin='form'>Edit</CustomButton>
              <CustomButton skin='form'>Delete</CustomButton>
            </div>
          </div>
        </div>
      </CommentsContent>
      <CommentsForm />
    </div>
  );
};