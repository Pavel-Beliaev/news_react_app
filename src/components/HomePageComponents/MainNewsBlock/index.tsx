import React from 'react';
import { Wrapper } from '../../Wrapper';
import { MainColumn } from './MainColumn';
import { OpinionColumn } from './OpinionColumn';
import { SundayReviewColumn } from './SundayReviewColumn';

export const MainNewsBlock = () => {
  return (
    <>
      <Wrapper.LeftColumn>
        <MainColumn />
      </Wrapper.LeftColumn>
      <Wrapper.RightColumn>
        <OpinionColumn />
        <SundayReviewColumn />
      </Wrapper.RightColumn>
    </>
  );
};
