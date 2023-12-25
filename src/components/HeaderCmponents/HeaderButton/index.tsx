import React, { FC, ReactNode } from 'react';

type PropsType = {
  children: ReactNode | string;
  className: string;
  onCLick?: () => void;
  type?: 'submit' | 'reset' | 'button' | undefined;
};
export const HeaderButton: FC<PropsType> = ({
  children,
  className,
  onCLick,
  type,
}) => {
  return (
    <button
      className={`flex items-center p-1.5 w-[30px] h-[30px] rounded text-white uppercase text-xs ${className}`}
      onClick={onCLick}
      type={type}>
      {children}
    </button>
  );
};
