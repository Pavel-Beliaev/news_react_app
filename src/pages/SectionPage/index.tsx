import React, { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchSectionsNews, setClear, useAppDispatch } from '../../store';
import {
  Category,
  CenterColumn,
  LeftColumn,
  NewsGrid,
  RightColumn,
  Wrapper,
} from '../../components';

export const SectionPage: FC = () => {
  const { pathname } = useLocation();
  const sectionName = pathname.split(/[\d/]/g).slice(-1).join('');
  const dispatch = useAppDispatch();

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
    return () => {
      dispatch(setClear([]));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      <Category title={sectionName.toUpperCase()} />
      <Wrapper.NewsBlock>
        <LeftColumn />
        <CenterColumn />
        <RightColumn />
        <NewsGrid />
      </Wrapper.NewsBlock>
    </>
  );
};
