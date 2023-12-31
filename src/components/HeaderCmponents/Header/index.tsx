import React, { useCallback, useState } from 'react';
import { HeaderButton } from '../HeaderButton';
import { BurgerIcon } from '../../../assets/SVG/BurgerIcon';
import { SearchIcon } from '../../../assets/SVG/SearchIcon';
import { SearchForm } from '../SearchForm';
import { Logo } from '../../Logo';

export const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAble, setIsAble] = useState(false);

  const showInput = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  const showSideBar = useCallback(() => {
    setIsAble(!isAble);
  }, [isAble]);

  return (
    <div className='container grid grid-cols-[0.6fr_1fr_0.6fr] py-2'>
      <div className='flex gap-x-2 self-center'>
        <HeaderButton className='hover:bg-[#f7f7f7]' onCLick={showSideBar}>
          <BurgerIcon w='20' h='20' />
        </HeaderButton>
        <HeaderButton className='hover:bg-[#f7f7f7]' onCLick={showInput}>
          <SearchIcon w='20' h='20' fill='transparent' />
        </HeaderButton>
        <SearchForm isVisible={isVisible} />
      </div>
      <div className='grid place-self-center '>
        {/*<Logo size='2xl' />*/}
        language
      </div>
      <div className='grid justify-self-end content-center px-2'>login...</div>
    </div>
  );
};
