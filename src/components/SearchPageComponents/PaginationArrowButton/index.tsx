import React, { FC } from 'react';

type PropsType = {
  onClick: () => void;
  content: string;
  isAble: boolean;
};
export const PaginationArrowButton: FC<PropsType> = ({
  onClick,
  content,
  isAble,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={isAble}
      className={`w-[15px] h-[15px]  select-none p-[20px] rounded flex justify-center items-center ${
        isAble ? '' : 'cursor-pointer hover:bg-yellow-100'
      }`}>
      {content}
    </button>
  );
};
