import React, { FC, memo, useCallback, useState } from 'react';
import { Logo } from '../../Logo';
import { useLocation } from 'react-router-dom';
import { CustomButton } from '../../CustomButton';
import { SVG } from '../../../assets';
import { SearchForm } from '../../SearchForm';

type PropsType = {
  onClick: () => void;
};
export const Header: FC<PropsType> = memo(({ onClick }) => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const isHome = pathname !== '/';
  const isSearchPage = pathname.includes('search');

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
          <CustomButton onClick={onClick} skin='default'>
            <SVG.BurgerIcon w='20' h='20' />
          </CustomButton>
          {!isSearchPage && (
            <>
              <CustomButton onClick={showInput} skin='default'>
                <SVG.SearchIcon w='20' h='20' fill='transparent' />
              </CustomButton>
              <SearchForm isVisible={isVisible} buttonType={1} />
            </>
          )}
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
});
