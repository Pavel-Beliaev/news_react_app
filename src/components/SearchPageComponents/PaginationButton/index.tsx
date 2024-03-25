import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { searchSlice, setPage, useAppDispatch } from '../../../store';

type PropsType = {
  pageNumber: number;
};
export const PaginationButton: FC<PropsType> = ({ pageNumber }) => {
  const { page } = useSelector(searchSlice);
  const dispatch = useAppDispatch();

  const changePage = (n: number) => {
    dispatch(setPage(n));
  };

  return (
    <button
      disabled={pageNumber === 0}
      onClick={() => changePage(pageNumber)}
      className={`w-[15px] h-[15px]  select-none p-[20px] rounded flex justify-center items-center ${
        pageNumber !== 0 ? 'cursor-pointer hover:bg-yellow-100' : ''
      } ${pageNumber === page ? 'bg-yellow-100' : ''}`}>
      {pageNumber === 0 ? '...' : pageNumber}
    </button>
  );
};
