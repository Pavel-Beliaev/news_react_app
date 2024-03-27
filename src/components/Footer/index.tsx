import React, { memo } from 'react';
import { Logo } from '../Logo';
import { Copyright } from './Copyright';
import { FooterNavigation } from './FooterNavigation';

export const Footer = memo(() => {
  return (
    <div className='container border-t-2 border-black'>
      <Logo size='text-3xl' />
      <FooterNavigation />
      <Copyright />
    </div>
  );
});
