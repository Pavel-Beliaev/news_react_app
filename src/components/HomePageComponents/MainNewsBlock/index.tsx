import React from 'react';
import { Wrapper } from '../../Wrapper';
import { useSelector } from 'react-redux';
import { newsSlice } from '../../../store/slice';
import { MainNewsCard } from '../MainNewsCard';
import { Post } from '../../Cards';
import { Heading } from '../../Heading';

export const MainNewsBlock = () => {
  const { data, opinions } = useSelector(newsSlice);

  return (
    <>
      <Wrapper.LeftColumn>
        <div className='flex flex-col gap-y-3.5'>
          {data.map((groupNews, i) => (
            <MainNewsCard key={i} news={groupNews} />
          ))}
        </div>
      </Wrapper.LeftColumn>
      <Wrapper.RightColumn>
        <Heading heading='Opinion' />
        <div className='grid grid-cols-[repeat(2,2fr)] gap-[10px] border-b pb-[24px] border-black'>
          {opinions.map((n, i) => (
            <div className='first:col-start-1 first:col-end-3 last:col-start-1 last:col-end-3 '>
              <Post.TextCardWithImgY
                key={n.url}
                title={n.title}
                time='3'
                size='S'
                isShare
                by=''
                url={n.multimedia[1].url}
                imgAuthor={i === 0 ? n.multimedia[1].copyright : ''}
                isRevers={false}
              />
            </div>
          ))}
        </div>
      </Wrapper.RightColumn>
    </>
  );
};
