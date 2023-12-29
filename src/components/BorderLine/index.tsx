import React, { FC } from 'react';

type PropsType = {
  className?: string;
};
export const BorderLine: FC<PropsType> = ({ className }) => {
  return (
    <hr
      className={`container border-t border-black w-full  col-start-1 col-end-[21] my-[24px] ${className}`}
    />
  );
};
