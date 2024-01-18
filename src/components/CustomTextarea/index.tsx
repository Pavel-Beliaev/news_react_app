import React, { FC } from 'react';

type PropsType = {
  placeholder: string;
  value: string;
  onChange: (e: string) => void;
};
export const CustomTextarea: FC<PropsType> = ({
  placeholder,
  value,
  onChange,
}) => {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className='transition-all w-full min-w-[10%] min-h-[100px] border rounded border-[999999] focus-visible:border pl-2 pr-[60px]'
    />
  );
};
