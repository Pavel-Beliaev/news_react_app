import React, { FC } from 'react';

type PropsType = {
  text: string;
  isEditable: boolean;
};
export const Body: FC<PropsType> = ({ text, isEditable }) => {
  return (
    <p
      className={`text-[14px] leading-[20px] ${
        isEditable ? 'p-[5px] border bg-white' : ''
      }`}
      contentEditable={isEditable}>
      {text}
    </p>
  );
};
