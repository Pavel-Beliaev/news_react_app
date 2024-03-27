import React, { FC, memo } from 'react';
import { Loader } from '../Loader';
import { useSelector } from 'react-redux';
import { searchSlice } from '../../../store';
import { SearchResults } from '../SearchResults';

export const ResultsBlock: FC = memo(() => {
  const { searchData, status } = useSelector(searchSlice);

  return (
    <div className='flex flex-col gap-y-[24px]'>
      {status !== 'success' ? (
        <Loader />
      ) : !!searchData.length ? (
        <SearchResults />
      ) : (
        'Not results'
      )}
    </div>
  );
});
