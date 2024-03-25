import React, { FC } from 'react';
import { setSort, useAppDispatch } from '../../../store';

export const Sort: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className='flex-[0_1_15%] border rounded border-transparent hover:border-[#C7C7C7] justify-center p-[8px]'>
      <select
        className='bg-transparent text-[18px]'
        defaultValue={'relevance'}
        onChange={(event) => dispatch(setSort(event.target.value))}>
        <option value={'relevance'}>Sort by Relevance</option>
        <option value={'newest'}>Sort by Newest</option>
        <option value={'oldest'}>Sort by Oldest</option>
      </select>
    </div>
  );
};
