import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { searchSlice } from '../../store';

export const SearchPage: FC = () => {
  const { searchData } = useSelector(searchSlice);
  return <div>search</div>;
};
