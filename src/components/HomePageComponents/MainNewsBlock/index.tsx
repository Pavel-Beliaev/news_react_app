import React from 'react';
import { Wrapper } from '../../Wrapper';
import { MainNews } from '../MainNews';
import { OpinionNews } from '../OpinionNews';
import { SundayReviewNews } from '../SundayReviewNews';

export const MainNewsBlock = () => {
  return (
    <>
      <Wrapper.LeftColumn>
        <MainNews />
      </Wrapper.LeftColumn>
      <Wrapper.RightColumn>
        <OpinionNews />
        <SundayReviewNews />
      </Wrapper.RightColumn>
    </>
  );
};
