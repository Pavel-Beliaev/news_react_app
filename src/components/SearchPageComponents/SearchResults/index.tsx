import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { searchSlice } from '../../../store';
import { Card } from '../Card';

export const SearchResults: FC = () => {
  const { searchData } = useSelector(searchSlice);

  return (
    <>
      {searchData.map((card) => (
        <Card key={card.web_url} card={card} />
      ))}
    </>
  );
};
