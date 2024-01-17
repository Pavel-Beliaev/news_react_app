import React, { FC } from 'react';
import { changeFormatDate } from '../../../utils/changeDateFormat';

type PropsType = {
  byline: string;
  date: string;
};

export const Byline: FC<PropsType> = ({ byline, date }) => {
  return (
    <div className='container flex flex-col gap-y-[5px] my-2.5'>
      <p className='font-bold text-[15px] leading-[20px] font-serif'>
        {byline}
      </p>
      <p className='font-sans font-medium text-[#363636] text-[13px] leading-[16px]'>
        {changeFormatDate(date)}
      </p>
    </div>
  );
};
