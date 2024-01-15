import React, { FC } from 'react';

type PropsType = {
  title: string;
  subTitle: string;
};
export const ArticleHeading: FC<PropsType> = ({ title, subTitle }) => {
  return (
    <div className='container flex flex-col gap-y-2.5'>
      <h1 className='leading-[46px] text-[40px] font-serif font-bold italic'>
        {title}
      </h1>
      <h2 className='leading-[30px] text-[23px] font-serif font-light'>
        {subTitle}
      </h2>
    </div>
  );
};
