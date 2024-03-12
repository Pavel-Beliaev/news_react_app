import React, { FC, FormEvent, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { ClearButton } from '../HeaderCmponents/ClearButton';
import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../CustomButton';
import { CustomInput } from '../CustomInput';
import { fetchSearchNews, searchSlice, useAppDispatch } from '../../store';
import { SVG } from '../../assets';

type PropsType = {
  isVisible: boolean;
  buttonType: 1 | 2;
};
export const SearchForm: FC<PropsType> = ({ isVisible, buttonType }) => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const { page, sort } = useSelector(searchSlice);
  const dispatch = useAppDispatch();

  const handlerSearch = (event: FormEvent) => {
    event.preventDefault();
    dispatch(fetchSearchNews({ query: search, page: page, sort: sort }));
    navigate(`/search/query=${search}}`);
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
      <div className='relative flex flex-grow items-center'>
        <CustomInput placeholder='SEARCH' value={search} onChange={setSearch} />
        {!!search.length && <ClearButton onClick={clearButton} />}
      </div>
      {buttonType === 1 ? (
        <CustomButton type={'submit'} isAble={!search.length} skin='form'>
          go
        </CustomButton>
      ) : (
        <CustomButton type={'submit'} isAble={!search.length} skin='default'>
          <SVG.SearchIcon w='20' h='20' fill='transparent' />
        </CustomButton>
      )}
    </form>
  );
};
