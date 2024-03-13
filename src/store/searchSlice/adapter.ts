import { FetchDataType } from './types';

export const adapter = (data: FetchDataType['response']) => {
  return {
    searchData: data.docs,
    countResults: data.meta.hits,
  };
};
