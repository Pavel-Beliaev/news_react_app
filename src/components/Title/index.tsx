import React, { FC } from 'react';

type PropsType = {
  title: string;
  className: string;
};
export const Title: FC<PropsType> = ({ title, className }) => {
  return <h3 className={className}>{title}</h3>;
};
