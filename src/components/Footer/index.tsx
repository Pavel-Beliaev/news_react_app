import React from 'react';
import { Logo } from '../Logo';
import { Copyright } from './Copyright';
import { FooterNavigation } from './FooterNavigation';

export const Footer = () => {
  return (
    <div className='container border-t-2 border-black'>
      <Logo size='text-3xl' />
      <FooterNavigation />
      <Copyright />
    </div>
  );
};
