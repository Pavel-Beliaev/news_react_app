import React, { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchSectionsNews, sectionsSlice, useAppDispatch } from '../../store';
import { useSelector } from 'react-redux';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return <div>section</div>;
};
