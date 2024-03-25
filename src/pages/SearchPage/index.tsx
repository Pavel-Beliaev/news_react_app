import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { searchSlice } from '../../store';
import { FilterBlock, Pagination, ResultsBlock } from '../../components';

export const SearchPage: FC = () => {
  const { value } = useSelector(searchSlice);

  useEffect(() => {
    const json = JSON.stringify(value);
    localStorage.setItem('search', json);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <>
      <FilterBlock />
      <ResultsBlock />
      <Pagination />
    </>
  );
};
