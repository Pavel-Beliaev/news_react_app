import React, { FC, ReactNode } from 'react';

type PropsType = {
  children: ReactNode | string;
  className: string;
  onCLick?: () => void;
  type?: 'submit' | 'reset' | 'button' | undefined;
  isAble?: boolean;
};
export const HeaderButton: FC<PropsType> = ({
  children,
  className,
  onCLick,
  type,
  isAble,
}) => {
  return (
    <button
      className={`flex items-center p-1.5 w-[30px] h-[30px] rounded text-white uppercase text-xs disabled:opacity-75 disabled:hover:bg-gray-400 ${className}`}
      onClick={onCLick}
      type={type}
      disabled={isAble}>
      {children}
    </button>
  );
};
