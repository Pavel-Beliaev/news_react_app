import React, { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchSectionsNews, useAppDispatch } from '../../store';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>section</div>;
};
