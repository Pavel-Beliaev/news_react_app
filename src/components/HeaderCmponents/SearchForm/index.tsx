import React, { FC, FormEvent, useCallback, useState } from 'react';
import { HeaderButton } from '../HeaderButton';
import { useAppDispatch } from '../../../store/store';
import { fetchSearchNews } from '../../../store/searchSlice/actions';
import { useSelector } from 'react-redux';
import { searchSlice } from '../../../store/searchSlice/slice';
import { ClearButton } from '../ClearButton';

type PropsType = {
  isVisible: boolean;
};
export const SearchForm: FC<PropsType> = ({ isVisible }) => {
  const [search, setSearch] = useState('');

  const { page, sort } = useSelector(searchSlice);
  const dispatch = useAppDispatch();

  const handlerSearch = (event: FormEvent) => {
    event.preventDefault();
    dispatch(fetchSearchNews({ query: search, page: page, sort: sort }));
  };

  const clearButton = useCallback(() => {
    setSearch('');
  }, []);

  return (
    <form
      onSubmit={handlerSearch}
      className={`flex gap-x-2 items-center w-full ${
        isVisible ? 'hidden' : ''
      }`}>
      <div className='relative flex items-center'>
        <input
          type='text'
          placeholder='SEARCH'
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className='w-full min-w-[10%] h-[30px] border rounded border-[999999] focus-visible:border pl-2 pr-[60px]'
        />
        {!!search.length && <ClearButton onClick={clearButton} />}
      </div>
      <HeaderButton
        className='bg-[#567b95] hover:bg-[#326891]'
        type={'submit'}
        isAble={!search.length}>
        go
      </HeaderButton>
    </form>
  );
};
