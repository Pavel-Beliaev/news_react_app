import React, { FC } from 'react';
import { formatNumber } from '../../../utils';
import { SearchForm } from '../../SearchForm';
import { searchSlice } from '../../../store';
import { useSelector } from 'react-redux';
import { Sort } from '../Sort';

export const FilterBlock: FC = () => {
  const { countResults } = useSelector(searchSlice);

  return (
    <div className=' flex flex-wrap justify-between items-center w-full border-b border-[#C7C7C7] p-[28px_0_10px_0] mb-[24px]'>
      <span className='flex-[0_1_100%] text-[grey] font-serif'>
        Showing {formatNumber(countResults)} results for:
      </span>
      <div className='flex-[0_1_70%]'>
        <SearchForm isVisible={false} buttonType={2} />
      </div>
      <Sort />
    </div>
  );
};
