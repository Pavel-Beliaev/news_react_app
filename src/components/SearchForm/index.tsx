import React, { FC, FormEvent, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { CustomButton } from '../CustomButton';
import { CustomInput } from '../CustomInput';
import { ClearButton } from '../HeaderCmponents';
import {
  fetchSearchNews,
  searchSlice,
  setValue,
  useAppDispatch,
} from '../../store';
import { SVG } from '../../assets';

type PropsType = {
  isVisible: boolean;
  buttonType: 1 | 2;
};
export const SearchForm: FC<PropsType> = ({ isVisible, buttonType }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { page, sort, value, status } = useSelector(searchSlice);
  const dispatch = useAppDispatch();
  const isSearchPage = pathname.includes('search');
  const handlerSearch = (event: FormEvent) => {
    event.preventDefault();
    if (isSearchPage) {
      dispatch(fetchSearchNews({ query: value, page: page, sort: sort }));
    }
    navigate(`/search/query=${value}}`);
  };

  useEffect(() => {
    if (isSearchPage) {
      dispatch(fetchSearchNews({ query: value, page: page, sort: sort }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clearButton = useCallback(() => {
    dispatch(setValue(''));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form
      onSubmit={handlerSearch}
      className={`flex gap-x-2 items-center w-full ${
        isVisible ? 'hidden' : ''
      }`}>
      <div className='relative flex flex-grow items-center'>
        <CustomInput
          placeholder='SEARCH'
          value={value}
          onChange={(e) => dispatch(setValue(e))}
        />
        {!!value.length && <ClearButton onClick={clearButton} />}
      </div>
      {buttonType === 1 ? (
        <CustomButton type={'submit'} isAble={!value.length} skin='form'>
          go
        </CustomButton>
      ) : (
        <CustomButton type={'submit'} isAble={!value.length} skin='default'>
          <SVG.SearchIcon w='20' h='20' fill='transparent' />
        </CustomButton>
      )}
    </form>
  );
};
