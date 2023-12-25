import React, { FC } from 'react';

type PropsType = {
  size: string;
};
export const Title: FC<PropsType> = ({ size }) => {
  return (
    <h1
      className={`grid place-self-center font-["Grenze_Gotisch"] ${size} tracking-widest shadowed-text`}>
      Echo of World
    </h1>
  );
};
