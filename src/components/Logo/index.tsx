import React, { FC } from 'react';

type PropsType = {
  size: string;
};
export const Logo: FC<PropsType> = ({ size }) => {
  return (
    <h1
      className={`font-["Grenze_Gotisch"] text-${size} tracking-widest shadowed-text`}>
      Echo of World
    </h1>
  );
};
