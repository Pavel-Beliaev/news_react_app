import React from 'react';
import { MainLayout } from './layouts/MainLayout';
import { Logo } from './components/Logo';
import { Post } from './components/Post';
import { Navbar } from './components/Navbar';
import { Title } from './components/Title';
import { Image } from './components/Image';
import { Time } from './components/Time';
import { Author } from './components/Author';
import { Heading } from './components/Heading';

function App() {
  return (
    <div className='w-full h-auto bg-yellow-50'>
      <MainLayout>
        <div className='container flex justify-center w-full py-2 border-b-4 border-black'>
          <Logo size='text-6xl' />
        </div>
        <Navbar />

        {/*основные новости*/}
        <div className='container border-t-2 border-black mt-1 pt-5'>
          <div className='grid grid-cols-[repeat(20,2fr)] gap-x-[33px]'>
            <div className='grid col-start-1 col-end-[15] gap-y-[20px]'>
              <Post />
              <Post />
              <Post />
            </div>
            <div className='grid relative col-start-[15] col-end-[21] before:border-l before:border-[#C7C7C7] before:absolute before:h-full before:left-[-16px] '>
              <div className='flex flex-col gap-y-[16px]'>
                <Heading heading='Opinion' />
                <div className='flex flex-col gap-y-[4px] border-b border-[#DFDFDF] pb-[16px]'>
                  <Author author='name' />
                  <Title title='Title' className='text-xl' />
                  <Time time='1' />
                </div>
                <div className='flex flex-col gap-y-[4px] border-b border-[#DFDFDF] pb-[16px]'>
                  <Author author='name' />
                  <Title title='Title' className='text-xl' />
                  <Time time='1' />
                  <Image
                    url='https://static01.nyt.com/images/2023/12/12/multimedia/12weiners1-01-promo/12weiners1-01-promo-superJumbo.jpg'
                    author=''
                  />
                </div>
                <div className='flex flex-col gap-y-[4px] border-b border-[#DFDFDF] pb-[16px]'>
                  <Author author='name' />
                  <Title title='Title' className='text-xl' />
                  <Time time='1' />
                </div>
                <div className='flex flex-col gap-y-[4px] border-b border-[#DFDFDF] pb-[16px]'>
                  <Author author='name' />
                  <Title title='Title' className='text-xl' />
                  <Time time='1' />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*больше новостей*/}
        {/*<div className='container border-y-2 border-black pb-[24px] pt-[6px]'>*/}
        {/*  <h2>More News</h2>*/}
        {/*  <div className='grid grid-cols-[repeat(20,1fr)] gap-x-[16px]'>*/}
        {/*    <div className='flex flex-col border-r pr-[16px] border-black col-start-[1] col-end-[6] '>*/}
        {/*      1*/}
        {/*    </div>*/}
        {/*    <div className='col-start-[6] col-end-[15]'>1</div>*/}
        {/*    <div className='col-start-[15] col-end-[21]'>1</div>*/}
        {/*  </div>*/}
        {/*</div>*/}

        {/*новости по категориям*/}
        {/*<div></div>*/}
      </MainLayout>
    </div>
  );
}

export default App;
