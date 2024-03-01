import React, { FC } from 'react';

type SkeletonsType = {
  count?: number;
};
const createArr = (num: number = 1) => {
  return Array.from(Array(num).keys());
};

const SkeletonText: FC<SkeletonsType> = ({ count }) => {
  return (
    <>
      {createArr(count).map((s) => (
        <div className='flex flex-col gap-y-1.5' key={s}>
          <div className='h-[12px] skeleton' />
          <div className='h-[12px] skeleton' />
          <div className='h-[12px] skeleton' />
        </div>
      ))}
    </>
  );
};

const SkeletonImage: FC<SkeletonsType> = ({ count }) => {
  return (
    <>
      {createArr(count).map((s) => (
        <div className='flex flex-col gap-y-1.5' key={s}>
          <div className='h-[100%] min-h-[100px] skeleton-image' />
          <div className='h-[12px] skeleton' />
          <div className='h-[12px] skeleton' />
        </div>
      ))}
    </>
  );
};

const SkeletonMainCard: FC<SkeletonsType> = ({ count }) => {
  return (
    <>
      {createArr(count).map((s) => (
        <div
          className='border-b pb-[24px] border-black last:border-none last:pb-0 grid-inner-left'
          key={s}>
          <div className='grid col-start-[1] col-end-[6] gap-y-2 self-start'>
            <div className='h-[12px] skeleton' />
            <div className='h-[12px] skeleton' />
            <div className='h-[12px] skeleton' />
          </div>
          <div className='grid col-start-[6] col-end-[15]'>
            <div className='h-[100%] min-h-[100px] skeleton-image' />
          </div>
        </div>
      ))}
    </>
  );
};

export const Skeletons = {
  SkeletonText,
  SkeletonImage,
  SkeletonMainCard,
};
