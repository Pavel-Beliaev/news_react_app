import React, { FC, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { fetchSectionsNews, sectionsSlice, useAppDispatch } from '../../store';
import { useSelector } from 'react-redux';
import {
  CenterColumn,
  Image,
  LeftColumn,
  Post,
  RightColumn,
  Title,
  Wrapper,
} from '../../components';
import { parserURL } from '../../utils';

export const SectionPage: FC = () => {
  const { pathname } = useLocation();
  const sectionName = pathname.split(/[\d/]/g).slice(-1).join('');
  const dispatch = useAppDispatch();
  const { topNews, dataSections } = useSelector(sectionsSlice);

  useEffect(() => {
    dispatch(
      fetchSectionsNews({
        section:
          sectionName === 'lifestyle'
            ? 'realestate'
            : sectionName === 'u.s'
              ? 'us'
              : sectionName,
      }),
    );
  }, [pathname]);

  return (
    <>
      <div className='flex flex-col gap-y-2 pb-[10px] mt-2.5'>
        <h1 className='text-[44px] leading-[44px] font-bold'>
          {sectionName.toUpperCase() + ' NEWS'}
        </h1>
      </div>
      <Wrapper.NewsBlock>
        <LeftColumn />
        <CenterColumn />
        <RightColumn />
        <div className='grid col-start-[1] col-end-[21] grid-cols-5 gap-[33px] mt-[20px] pt-[20px] border-t border-black '>
          {dataSections.map(
            (n, i) =>
              !!n.multimedia && (
                <div
                  key={n.url}
                  className={`${(i + 1) % 5 ? 'delimiter' : ''}`}>
                  <Post
                    type='gridPosts'
                    articleData={{
                      title: n.title,
                      byline: n.byline,
                      url: n.url,
                      created_date: n.created_date,
                      img: n.multimedia[0].url,
                      copyright: n.multimedia[0].copyright,
                      caption: n.multimedia[0].caption,
                      description: n.abstract,
                    }}
                    title={n.title}
                    img={n.multimedia[1].url}
                    size='S'
                    time={''}
                    idArticle={parserURL(n.uri)}
                  />
                </div>
              ),
          )}
        </div>
        <div>{/*archive*/}</div>
      </Wrapper.NewsBlock>
    </>
  );
};
