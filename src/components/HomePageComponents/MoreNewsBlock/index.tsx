import React from 'react';
import { Wrapper } from '../../Wrapper';
import { useSelector } from 'react-redux';
import { newsSlice } from '../../../store/slice';
import { Heading } from '../../Heading';
import { Post } from '../../Posts';

export const MoreNewsBlock = () => {
  const { moreNews } = useSelector(newsSlice);
  const centerColumn = moreNews[0] !== undefined && moreNews[0][3];
  const leftColumn = moreNews[0].slice(0, 3);
  const rightColumn = moreNews[1];

  return (
    <>
      <Heading heading='More News' />
      <Wrapper.LeftColumn>
        <div className='grid-inner-left '>
          <div className='grid col-start-[1] col-end-[6] delimiter gap-y-2.5'>
            {leftColumn.map((n, i) => (
              <Post.TextCard
                title={n.title}
                text={n.abstract}
                time='4'
                size='M'
              />
            ))}
          </div>
          <div className='grid col-start-[6] col-end-[15]'>
            {!!centerColumn && (
              <Post.TextCardWithImgY
                title={centerColumn.title}
                text={centerColumn.abstract}
                time='6'
                size='M'
                isShare
                by=''
                url={centerColumn.multimedia[1].url}
                imgAuthor={centerColumn.multimedia[1].copyright}
                isRevers={false}
              />
            )}
          </div>
        </div>
      </Wrapper.LeftColumn>
      <Wrapper.RightColumn>
        <div className='flex flex-col gap-y-2.5'>
          {rightColumn.map((n) => (
            <Post.TextCard title={n.title} time='3' size='M' />
          ))}
        </div>
      </Wrapper.RightColumn>
    </>
  );
};
