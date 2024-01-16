import React, { FC, useCallback } from 'react';
import { ErrorDescription } from './ErrorDescription';
import { ErrorTitle } from './ErrorTitle';
import { useSelector } from 'react-redux';
import { searchSlice } from '../../store/searchSlice/slice';
import { CustomButton } from '../CustomButton';
import { SVG } from '../../assets/SVG';
import { useNavigate } from 'react-router-dom';

export const Error: FC = () => {
  const { code } = useSelector(searchSlice);
  const navigate = useNavigate();

  const errorMessage = useCallback((c: string) => {
    switch (c) {
      case '429':
        return 'Too many requests. You reached your per minute or per day rate limit.';
      case '401':
        return 'Unauthorized request.';
      default:
        return 'Page Not Found';
    }
  }, []);

  return (
    <div className='container p-3.5 flex flex-col  items-center gap-y-6 '>
      <ErrorTitle code={code} />
      <ErrorDescription message={errorMessage(code)} />
      <CustomButton skin='error' onClick={() => navigate(-1)}>
        <SVG.ArrowIcon w='10' h='12' className='rotate-180' />
        Back
      </CustomButton>
    </div>
  );
};
