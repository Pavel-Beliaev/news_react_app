import React, { FC, FormEvent, useCallback, useState } from 'react';
import { useAppDispatch } from '../../../store/store';
import { fetchSearchNews } from '../../../store/searchSlice/actions';
import { useSelector } from 'react-redux';
import { searchSlice } from '../../../store/searchSlice/slice';
import { ClearButton } from '../ClearButton';
import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../../CustomButton';
import { CustomInput } from '../../CustomInput';

type PropsType = {
  isVisible: boolean;
};
export const SearchForm: FC<PropsType> = ({ isVisible }) => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const { page, sort } = useSelector(searchSlice);
  const dispatch = useAppDispatch();

  const handlerSearch = (event: FormEvent) => {
    event.preventDefault();
    dispatch(fetchSearchNews({ query: search, page: page, sort: sort }));
    navigate(`search/query=${search}}`);
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
        <CustomInput placeholder='SEARCH' value={search} onChange={setSearch} />
        {!!search.length && <ClearButton onClick={clearButton} />}
      </div>
      <CustomButton type={'submit'} isAble={!search.length} skin='form'>
        go
      </CustomButton>
    </form>
  );
};
