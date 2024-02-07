import React, { FC } from 'react';

type PropsType = {
  placeholder: string;
  value: string;
  onChange: (e: string) => void;
};
export const CustomInput: FC<PropsType> = ({
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className='w-full min-w-[10%] h-[30px] border rounded border-[#999999] focus-visible:border pl-2 pr-[60px]'
    />
  );
};
