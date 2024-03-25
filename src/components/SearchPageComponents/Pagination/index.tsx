import React, { FC } from 'react';
import { searchSlice, setPage, useAppDispatch } from '../../../store';
import { usePaginate } from '../../../hoocks';
import { useSelector } from 'react-redux';
import { PaginationButton } from '../PaginationButton';
import { PaginationArrowButton } from '../PaginationArrowButton';

export const Pagination: FC = () => {
  const { page } = useSelector(searchSlice);
  const paginate = usePaginate(200, page, 3);
  const dispatch = useAppDispatch();

  const handleArrow = <T extends 'next' | 'prev'>(
    page: number,
    type: T,
  ): void => {
    if (type === 'next') {
      dispatch(setPage(page + 1));
    } else dispatch(setPage(page - 1));
  };

  return (
    <div className='flex justify-center items-center w-full gap-x-2.5 p-[15px]'>
      <PaginationArrowButton
        onClick={() => handleArrow(page, 'prev')}
        content='<'
        isAble={page <= 1}
      />
      {paginate.map((num, i) => (
        <PaginationButton key={i} pageNumber={num} />
      ))}
      <PaginationArrowButton
        onClick={() => handleArrow(page, 'next')}
        content='>'
        isAble={page === 200}
      />
    </div>
  );
};
