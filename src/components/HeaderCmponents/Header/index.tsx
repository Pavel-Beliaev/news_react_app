import React, { FC, useCallback, useState } from 'react';
import { HeaderButton } from '../HeaderButton';
import { SearchForm } from '../SearchForm';
import { Logo } from '../../Logo';
import { useLocation } from 'react-router-dom';
import { SVG } from '../../../assets/SVG';

type PropsType = {
  onClick: () => void;
};
export const Header: FC<PropsType> = ({ onClick }) => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const isHome = pathname !== '/';

  const showInput = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  return (
    <div className='relative'>
      <div
        className={`container grid grid-cols-[0.6fr_1fr_0.6fr] py-2 ${
          isHome
            ? 'after:absolute after:border-[#C7C7C7] after:border-b after:bottom-0 after:w-full after:left-0'
            : ''
        }`}>
        <div className='flex gap-x-2 self-center'>
          <HeaderButton className='hover:bg-[#f7f7f7]' onCLick={onClick}>
            <SVG.BurgerIcon w='20' h='20' />
          </HeaderButton>
          <HeaderButton className='hover:bg-[#f7f7f7]' onCLick={showInput}>
            <SVG.SearchIcon w='20' h='20' fill='transparent' />
          </HeaderButton>
          <SearchForm isVisible={isVisible} />
        </div>
        <div className='grid place-self-center '>
          {isHome && <Logo size='text-2xl' />}
        </div>
        <div className='grid justify-self-end content-center px-2'>
          login...
        </div>
      </div>
    </div>
  );
};
