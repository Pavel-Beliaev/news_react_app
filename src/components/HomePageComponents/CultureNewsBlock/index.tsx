import React, { FC } from 'react';
import { Wrapper } from '../../Wrapper';
import { Heading } from '../../Heading';
import { Post } from '../../Posts';
import { useSelector } from 'react-redux';
import { newsSlice } from '../../../store/mainNewsSlice/slice';
import { CultureMainColumn } from './CultureMainColumn';
import { CultureRightColumn } from './CultureRightColumn';

export const CultureNewsBlock: FC = () => {
  const {
    cultureNews: { rightColumn },
  } = useSelector(newsSlice);
  return (
    <>
      <Heading heading='Culture and Lifestyle' />
      <Wrapper.LeftColumn>
        <CultureMainColumn />
      </Wrapper.LeftColumn>
      <Wrapper.RightColumn>
        <CultureRightColumn
          news={rightColumn.slice(0, 2)}
          className='after:border-b after:absolute after:border-[#C7C7C7] after:w-full after:bottom-[-12px]'
        />
        <CultureRightColumn news={rightColumn.slice(2)} />
      </Wrapper.RightColumn>
    </>
  );
};