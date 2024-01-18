import React, { FC, ReactNode } from 'react';

type PropsType = {
  children: ReactNode;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button' | undefined;
  isAble?: boolean;
  skin: 'form' | 'dots' | 'share' | 'long' | 'default';
};
export const CustomButton: FC<PropsType> = ({
  children,
  onClick,
  type,
  isAble,
  skin,
}) => {
  const handlerStyle = (skin: PropsType['skin']): string => {
    switch (skin) {
      case 'form':
        return 'my-button h-[30px] rounded bg-[#567b95] hover:bg-[#326891] text-white';
      case 'dots':
        return 'opacity-0 group-hover:opacity-100';
      case 'share':
        return 'my-button rounded-full border border-[#C7C7C7] hover:bg-yellow-100';
      case 'long':
        return 'p-[8px_25px] font-semibold bg-[#567b95] hover:bg-[#326891] text-white rounded flex items-center justify-center gap-x-3';
      default:
        return 'my-button w-[30px] h-[30px] rounded hover:bg-yellow-100';
    }
  };
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={isAble}
      className={`${handlerStyle(skin)}`}>
      {children}
    </button>
  );
};
