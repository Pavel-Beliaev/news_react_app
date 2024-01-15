import React, { FC, useCallback } from 'react';
import { ErrorButton } from './ErrorButton';
import { ErrorDescription } from './ErrorDescription';
import { ErrorTitle } from './ErrorTitle';
import { useSelector } from 'react-redux';
import { searchSlice } from '../../store/searchSlice/slice';

export const Error: FC = () => {
  const { code } = useSelector(searchSlice);

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
      <ErrorButton />
    </div>
  );
};
