import React, { FC, memo } from 'react';
import { NavbarItem } from '../NavbarItem';

type PropsType = {
  itemsArray: string[];
};
export const Navigation: FC<PropsType> = memo(({ itemsArray }) => {
  return (
    <>
      {itemsArray.map((item) => (
        <NavbarItem key={item} item={item} />
      ))}
    </>
  );
});
