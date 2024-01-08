import React from 'react';
import { Wrapper } from '../../Wrapper';
import { useSelector } from 'react-redux';
import { newsSlice } from '../../../store/slice';
import { Heading } from '../../Heading';
import { Post } from '../../Posts';
import { LeftColumn } from './LeftColumn';
import { CenterColumn } from './CenterColumn';
import { RightColumn } from './RightColumn';

export const MoreNewsBlock = () => {
  return (
    <>
      <Heading heading='More News' />
      <Wrapper.LeftColumn>
        <div className='grid-inner-left'>
          <LeftColumn />
          <CenterColumn />
        </div>
      </Wrapper.LeftColumn>
      <Wrapper.RightColumn>
        <RightColumn />
      </Wrapper.RightColumn>
    </>
  );
};
