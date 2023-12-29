import React, { useEffect } from 'react';
import { Logo } from './components/Logo';
import { Navbar } from './components/Navbar';
import { Image } from './components/Image';
import {
  fetchMagazine,
  fetchOpinions,
  fetchTopStories,
  fetchWorldNews,
  newsSlice,
} from './store/slice';
import { useAppDispatch } from './store/store';
import { useSelector } from 'react-redux';
import { Heading } from './components/Heading';
import { BorderLine } from './components/BorderLine';
import { TextBlock } from './components/TextBlock';
import { Header } from './components/HeaderCmponents/Header';
import { Content } from './components/Content';
import { MainColum } from './components/MainColum';
import { OtherColum } from './components/OtherColum';

function App() {
  const dispatch = useAppDispatch();
  const { data, opinions, magazine, world } = useSelector(newsSlice);

  useEffect(() => {
    dispatch(fetchTopStories());
    dispatch(fetchOpinions());
    dispatch(fetchMagazine());
    dispatch(fetchWorldNews());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(world);
  return (
    <div className='w-full h-auto bg-yellow-50'>
      <Header />

      <div className='container flex justify-center w-full py-2 border-b-4 border-black'>
        <Logo size='6xl' />
      </div>
      <Navbar />
      <Content className='border-t-2 border-black mt-0.5 pt-5'>
        <MainColum>
          {data
            .filter((n, i) => n.section !== 'opinion' && i < 15)
            .map((n) => (
              <div
                className='grid grid-cols-[repeat(14,2fr)] gap-x-[33px] border-b pb-[24px] border-black last:border-none last:pb-0'
                key={n.url}>
                <div className='grid col-start-[1] col-end-[6]'>
                  <TextBlock
                    title={n.title}
                    text={n.abstract}
                    time='1'
                    size='L'
                  />
                </div>
                <div className='grid col-start-[6] col-end-[15]'>
                  <Image
                    url={n.multimedia[1].url}
                    author={n.multimedia[1].copyright}
                  />
                </div>
              </div>
            ))}
        </MainColum>

        <OtherColum>
          <div className='flex flex-col gap-y-3.5 border-b border-black mb-[20px] pb-[10px] gap-y-2.5'>
            {magazine
              .filter((m, i) => m.title !== '' && m.abstract !== '' && i < 6)
              .map((m) => (
                <div className='flex flex-col gap-y-2' key={m.url}>
                  <Image
                    url={m.multimedia[1].url}
                    author={m.multimedia[1].copyright}
                  />
                  <TextBlock
                    author={m.kicker}
                    title={m.title}
                    size='S'
                    time='1'
                  />
                </div>
              ))}
          </div>
          <Heading heading='Opinion' />
          {data
            .filter((n) => n.section === 'opinion')
            .map((n, i) => (
              <div
                key={n.url}
                className='flex flex-col gap-y-[4px] border-b border-[#DFDFDF] pb-[16px]'>
                <TextBlock
                  author={n.kicker}
                  title={n.title}
                  time='1'
                  size='S'
                />
                {i === 1 && (
                  <Image
                    url={n.multimedia[1].url}
                    author={n.multimedia[1].copyright}
                  />
                )}
              </div>
            ))}
          {opinions
            .filter((o, i) => i < 3)
            .map((o) => (
              <div
                key={o.url}
                className='flex flex-col gap-y-[4px] border-b border-[#DFDFDF] pb-[16px]'>
                <TextBlock
                  author={o.kicker}
                  title={o.title}
                  time='1'
                  size='S'
                />
                {o.subsection === 'letters' && (
                  <Image
                    url={o.multimedia[1].url}
                    author={o.multimedia[1].copyright}
                  />
                )}
              </div>
            ))}
        </OtherColum>
      </Content>

      <BorderLine />

      <Content>
        <Heading heading='More News' />
        <MainColum className='grid-cols-[repeat(14,2fr)] gap-x-[33px]'>
          <div className='grid col-start-[1] col-end-[6] delimiter pt-[16px] first:pt-0'>
            {data
              .filter(
                (n, i, a) =>
                  i > 15 && n.section !== 'opinion' && i < a.length - 3,
              )
              .map((n) => (
                <div
                  key={n.url}
                  className='border-b last:border-none border-[#DFDFDF] py-[16px] first:pt-0 last:pb-0'>
                  <TextBlock
                    title={n.title}
                    text={n.abstract}
                    time='1'
                    size='M'
                  />
                </div>
              ))}
          </div>

          <div className='grid col-start-[6] col-end-[15] content-start'>
            {data
              .filter((n, i, a) => i === a.length - 2)
              .map((n) => (
                <div key={n.url}>
                  <Image
                    url={n.multimedia[1].url}
                    author={n.multimedia[1].copyright}
                  />
                  <TextBlock
                    title={n.title}
                    text={n.abstract}
                    time='1'
                    size='M'
                  />
                </div>
              ))}
          </div>
        </MainColum>
        <OtherColum>
          {world.slice(1, 7).map((w) => (
            <div
              key={w.url}
              className='flex flex-col border-b border-[#DFDFDF] pb-[10px] mb-[10px] last:border-none'>
              <TextBlock author={w.kicker} title={w.title} time='1' size='S' />
            </div>
          ))}
        </OtherColum>
      </Content>

      <BorderLine />

      <Content>
        <Heading heading='The Biggest Pop Culture Moments of 2023' />
        <MainColum>
          {data.slice(-1).map((n) => (
            <div className='flex flex-col gap-y-[4px]' key={n.url}>
              <Image
                url={n.multimedia[1].url}
                author={n.multimedia[1].copyright}
              />
              <TextBlock author={n.kicker} title={n.title} time='1' size='L' />
            </div>
          ))}
        </MainColum>
      </Content>

      <BorderLine className='mb-1' />
      <div className='container border-t-2 border-black  '>
        <Logo size='2xl' />
        <div></div>
      </div>
    </div>
  );
}

export default App;
