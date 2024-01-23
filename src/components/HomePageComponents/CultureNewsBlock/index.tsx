import React, { FC } from 'react';
import { Wrapper } from '../../Wrapper';
import { Heading } from '../../Heading';
import { useSelector } from 'react-redux';
import { CultureMainColumn } from './CultureMainColumn';
import { CultureRightColumn } from './CultureRightColumn';
import { newsSlice } from '../../../store';

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
