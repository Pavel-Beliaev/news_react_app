import React, { FC } from 'react';
import { ErrorPage, HomePage, PostPage, SectionPage } from '../../pages';

export const Content: FC = () => {
  return (
    <div className='container flex flex-col gap-y-0.5'>
      <HomePage />
      {/*<PostPage />*/}
      {/*<SectionPage />*/}
      {/*<ErrorPage />*/}
    </div>
  );
};
