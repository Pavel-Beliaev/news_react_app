import React, { FC } from 'react';
import { Loader } from '../Loader';
import { useSelector } from 'react-redux';
import { searchSlice } from '../../../store';
import { SearchResults } from '../SearchResults';

export const ResultsBlock: FC = () => {
  const { searchData, status } = useSelector(searchSlice);

  return (
    <div className='flex flex-col gap-y-[24px]'>
      {!!searchData.length && status === 'success' ? (
        <SearchResults />
      ) : (
        <Loader />
      )}
    </div>
  );
};
