import React, { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchSectionsNews, useAppDispatch } from '../../store';
import {
  CenterColumn,
  LeftColumn,
  NewsGrid,
  RightColumn,
  Wrapper,
} from '../../components';

export const SectionPage: FC = () => {
  const { pathname } = useLocation();
  const sectionName = pathname.split(/[\d/]/g).slice(-1).join('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      fetchSectionsNews({
        section:
          sectionName === 'lifestyle'
            ? 'realestate'
            : sectionName === 'u.s'
              ? 'us'
              : sectionName,
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      <div className='flex flex-col gap-y-2 pb-[10px] mt-2.5'>
        <h1 className='text-[44px] leading-[44px] font-bold'>
          {sectionName.toUpperCase() + ' NEWS'}
        </h1>
      </div>
      <Wrapper.NewsBlock>
        <LeftColumn />
        <CenterColumn />
        <RightColumn />
        <NewsGrid />
      </Wrapper.NewsBlock>
    </>
  );
};
