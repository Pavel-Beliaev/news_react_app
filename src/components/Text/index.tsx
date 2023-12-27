import React, { FC } from 'react';

type PropsType = {
  text: string;
  className: string;
};
export const Text: FC<PropsType> = ({ text, className }) => {
  return <p className={className}>{text}</p>;
};
