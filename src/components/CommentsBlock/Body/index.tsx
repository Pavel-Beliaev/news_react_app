import React, { FC, useState } from 'react';

type PropsType = {
  text: string;
  isEditable: boolean;
};
export const Body: FC<PropsType> = ({ text, isEditable }) => {
  const [editText, setEditText] = useState(text);

  const onChanges = (str: string) => {
    setEditText(str);
  };

  return (
    <>
      {isEditable ? (
        <input
          type='text'
          value={editText}
          onChange={(event) => onChanges(event.target.value)}
          autoFocus
        />
      ) : (
        <p
          className={`text-[14px] leading-[20px] ${
            isEditable ? 'p-[5px] border bg-white' : ''
          }`}>
          {editText}
        </p>
      )}
    </>
  );
};
