import React, { FC, useMemo, useState } from 'react';
import { SVG } from '../../../assets';

export const ArchiveSearch: FC = () => {
  const [value, setValue] = useState('');

  const searchIcon = useMemo(() => {
    return (
      <div className='absolute bottom-0 left-[10px]'>
        <SVG.SearchIcon w='20' h='20' fill='transparent' />
      </div>
    );
  }, []);

  const clearIcon = useMemo(() => {
    return (
      <div
        className='absolute bottom-0 right-[10px] cursor-pointer'
        onClick={() => setValue('')}>
        <SVG.Cancel w='20' h='20' />
      </div>
    );
  }, []);

  return (
    <div className='translate-y-[-12px] border-b border-[#C7C7C7]'>
      <div className='relative inline'>
        <input
          className='min-w-[20%] max-w-[60%] p-[12px_40px] border-[#C7C7C7] border-x border-t focus-visible:outline-0 translate-y-[1px] bg-yellow-50 '
          type='text'
          value={value}
          placeholder='Search...'
          onChange={(event) => setValue(event.target.value)}
          style={{ width: `${value.length * 14}px` }}
        />
        {searchIcon}
        {!!value && clearIcon}
      </div>
    </div>
  );
};
