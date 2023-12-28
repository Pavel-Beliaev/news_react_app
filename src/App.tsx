import React, { useEffect } from 'react';
import { MainLayout } from './layouts/MainLayout';
import { Logo } from './components/Logo';
import { Post } from './components/Post';
import { Navbar } from './components/Navbar';
import { Title } from './components/Title';
import { Image } from './components/Image';
import { Time } from './components/Time';
import { Author } from './components/Author';
import { fetchNewsData, newsSlice } from './store/slice';
import { useAppDispatch } from './store/store';
import { useSelector } from 'react-redux';
import { Heading } from './components/Heading';
import { BorderLine } from './components/BorderLine';

function App() {
  const dispatch = useAppDispatch();
  const { data } = useSelector(newsSlice);

  useEffect(() => {
    dispatch(fetchNewsData());
  }, []);

  // const arr = [
  //   'Art',
  //   'Artificial Intelligence',
  //   'Two Thousand Twenty Three',
  //   'Culture (Arts)',
  // ];
  // const arr2 = [
  //   'Books and Literature',
  //   'Artificial Intelligence',
  //   'Poetry and Poets',
  //   'Writing and Writers',
  //   'Death of an Author (Book)',
  //   'Do You Remember Being Born? (Book)',
  //   'The Changing Light at Sandover (Book)',
  // ];
  // // console.log(data);
  // const handler = (a: string[], b: string[]) => {
  //   for (let i = 0; i < a.length; i++) {
  //     const el1 = a[i];
  //     for (let j = 0; j < b.length; j++) {
  //       const el2 = b[i];
  //       if (el1 === el2) {
  //         return el1;
  //       }
  //     }
  //   }
  // };
  //
  // console.log(data.map((n) => n.des_facet));

  return (
    <div className='w-full h-auto bg-yellow-50'>
      <MainLayout>
        <div className='container flex justify-center w-full py-2 border-b-4 border-black'>
          <Logo size='text-6xl' />
        </div>
        <Navbar />
        <div className='container border-t-2 border-black mt-1 pt-5 grid grid-cols-[repeat(20,2fr)] gap-x-[33px] '>
          <div className='grid col-start-1 col-end-[15] gap-y-[20px] delimiter'>
            {data
              .filter((n, i) => n.section !== 'opinion' && i < 15)
              .map((n, i, a) => (
                <Post
                  key={n.url}
                  isLast={i === a.length - 1}
                  title={n.title}
                  text={n.abstract}
                  url={n.multimedia[0].url}
                  author={n.multimedia[0].copyright}
                />
              ))}
          </div>
          <div className=' grid relative content-start col-start-[15] col-end-[21] gap-y-5 '>
            <Heading heading='Opinion' />
            {data
              .filter((n) => n.section === 'opinion')
              .map((n) => (
                <div
                  key={n.url}
                  className='flex flex-col gap-y-[4px] border-b border-[#DFDFDF] pb-[16px]'>
                  <Author author={n.kicker} />
                  <Title title={n.title} />
                  <Time time='1' />
                  <Image
                    url={n.multimedia[0].url}
                    author={n.multimedia[0].copyright}
                  />
                </div>
              ))}
          </div>
          <BorderLine />
          <div className=' grid col-start-1 col-end-[15] delimiter'>
            <Heading heading='Our Top Profiles of 2023' />
            {data.slice(-1).map((n) => (
              <div key={n.url} className='flex flex-col-reverse gap-y-[4px]'>
                <Author author={n.kicker} />
                <Title title={n.title} />
                <Time time='1' />
                <Image
                  url={n.multimedia[0].url}
                  className=''
                  author={n.multimedia[0].copyright}
                />
              </div>
            ))}
          </div>
          <BorderLine />

          {/*{data.map((n, i, a) =>*/}
          {/*  i % 2 === 0 ? (*/}
          {/*    <div*/}
          {/*      key={n.url}*/}
          {/*      className='grid relative col-start-1 col-end-[15] gap-y-[20px] before:border-l before:border-[#C7C7C7] before:absolute before:h-full before:h-full before:right-[-16px]'>*/}
          {/*      <Post*/}
          {/*        title={n.title}*/}
          {/*        text={n.abstract}*/}
          {/*        url={n.multimedia[0].url}*/}
          {/*        author={n.multimedia[0].copyright}*/}
          {/*      />*/}
          {/*    </div>*/}
          {/*  ) : i === a.length - 1 ? (*/}
          {/*    <div className=' border-y-2 border-black pb-[24px] pt-[6px] grid col-start-1 col-end-[15]'>*/}
          {/*      <div className='flex flex-col-reverse gap-y-[4px]  border-[#DFDFDF] '>*/}
          {/*        <Author author={n.kicker} />*/}
          {/*        <Title title={n.title} />*/}
          {/*        <Time time='1' />*/}
          {/*        <Image*/}
          {/*          url={n.multimedia[0].url}*/}
          {/*          className='top-[-50%]'*/}
          {/*          author={n.multimedia[0].copyright}*/}
          {/*        />*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  ) : (*/}
          {/*    <div*/}
          {/*      key={n.url}*/}
          {/*      className='grid content-end relative col-start-[15] col-end-[21] '>*/}
          {/*      <div className='flex flex-col'>*/}
          {/*        <div className='flex flex-col gap-y-[4px] border-b border-[#DFDFDF] pb-[16px]'>*/}
          {/*          <Author author={n.kicker} />*/}
          {/*          <Title title={n.title} />*/}
          {/*          <Time time='1' />*/}
          {/*          <Image*/}
          {/*            url={n.multimedia[0].url}*/}
          {/*            author={n.multimedia[0].copyright}*/}
          {/*          />*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  ),*/}
          {/*)}*/}
        </div>

        {/*новости по категориям*/}
        {/*<div></div>*/}
      </MainLayout>
    </div>
  );
}

export default App;
