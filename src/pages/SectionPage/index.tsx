import React, { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchSectionsNews, sectionsSlice, useAppDispatch } from '../../store';
import { useSelector } from 'react-redux';
import { Wrapper } from '../../components';

export const SectionPage: FC = () => {
  const { pathname } = useLocation();
  const sectionName = pathname.split(/[\d/]/g).slice(-1).join('');
  const dispatch = useAppDispatch();
  const { topNews, dataSections } = useSelector(sectionsSlice);
  const { leftColumn, centerColumn, rightColumn } = topNews;
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
  }, [pathname]);

  return (
    <>
      <div className='flex flex-col gap-y-2 pb-[10px] mt-2.5'>
        <h1 className='text-[44px] leading-[44px] font-bold'>
          {sectionName.toUpperCase() + ' NEWS'}
        </h1>
      </div>
      <Wrapper.NewsBlock>
        <div className='col-start-[1] col-end-[11] delimiter'>1</div>
        <div className='col-start-[11] col-end-[16] delimiter'>1</div>
        <div className='col-start-[16] col-end-[21]'>1</div>
        <div>{/*{dataSections}*/}</div>
        <div>{/*archive*/}</div>
      </Wrapper.NewsBlock>
    </>
  );
};
