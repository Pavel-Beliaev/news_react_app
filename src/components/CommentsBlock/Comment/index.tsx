import React, { FC } from 'react';
import { Avatar } from '../Avatar';
import { Body } from '../Body';
import { CommentBar } from '../CommentBar';
import { CreatedTime } from '../CreatedTime';
import { Name } from '../Name';

type PropsType = {
  name: string;
  text: string;
};
export const Comment: FC<PropsType> = ({ name, text }) => {
  return (
    <div className='flex gap-x-2 border-b border-[#C7C7C7] last:border-none pb-2.5 '>
      <Avatar avatar='A' />
      <div className='flex flex-col gap-y-2'>
        <div>
          <Name name={name} />
          <CreatedTime time='17:17' />
        </div>
        <Body isEditable={false} text={text} />
        <CommentBar onDelete={() => {}} onEdit={() => {}} />
      </div>
    </div>
  );
};
