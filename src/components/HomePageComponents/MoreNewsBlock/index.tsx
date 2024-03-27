import React, { FC, memo } from 'react';
import { Wrapper } from '../../Wrapper';
import { Heading } from '../../Heading';
import { LeftColumn } from './LeftColumn';
import { CenterColumn } from './CenterColumn';
import { RightColumn } from './RightColumn';

export const MoreNewsBlock: FC = memo(() => {
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
});
