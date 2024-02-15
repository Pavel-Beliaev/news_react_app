import {
  AsyncThunk,
  AsyncThunkConfig,
} from '@reduxjs/toolkit/dist/createAsyncThunk';
import { HomePageDataType, useAppDispatch } from '../../store';
import { useEffect, useState } from 'react';

export function useFetching<
  T extends AsyncThunk<HomePageDataType, void, AsyncThunkConfig>[],
>(...args: T): string {
  const dispatch = useAppDispatch();

  const [isLoading, setA] = useState<
    'pending' | 'success' | 'loading' | 'error'
  >('pending');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setA('loading');
        for (const action of args) {
          await dispatch(action());
        }
        setA('success');
      } catch (error) {
        setA('error');
        console.log(error);
      }
    };
    fetchData().then((r) => r);
  }, []);

  return isLoading;
}
