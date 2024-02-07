import React, { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchSectionsNews, sectionsSlice, useAppDispatch } from '../../store';
import { useSelector } from 'react-redux';
import {
  CenterColumn,
  Description,
  LeftColumn,
  NewsGrid,
  RightColumn,
  Title,
  Wrapper,
} from '../../components';
import { SVG } from '../../assets';

export const SectionPage: FC = () => {
  const { pathname } = useLocation();
  const sectionName = pathname.split(/[\d/]/g).slice(-1).join('');
  const dispatch = useAppDispatch();
  const { topNews, dataSections } = useSelector(sectionsSlice);
  const [value, setValue] = useState('');

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
        <LeftColumn />
        <CenterColumn />
        <RightColumn />
        <NewsGrid />
      </Wrapper.NewsBlock>
      <div className='flex flex-col gap-y-2'>
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
            <div className='absolute bottom-0 left-[10px]'>
              <SVG.SearchIcon w='20' h='20' fill='transparent' />
            </div>
            <div className='absolute bottom-0 right-[10px]'>
              <SVG.SearchIcon w='20' h='20' fill='transparent' />
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='flex'>
            <div>sort</div>
            <div>sort</div>
          </div>
          <span>result</span>
        </div>
        <div className='flex flex-col gap-y-[20px]'>
          {[1, 2, 3].map(() => (
            <div className='grid grid-cols-[0.5fr_3fr_1fr] border-b border-[#C7C7C7] last:border-none pb-[20px]'>
              <div>date</div>
              <div>
                <Title title={''} size={'S'} />
                <Description text={''} />
                <span>byline</span>
              </div>
              <div>foto</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
