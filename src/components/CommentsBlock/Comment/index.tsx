import React, { FC } from 'react';
import { Avatar } from '../Avatar';
import { Body } from '../Body';
import { CommentBar } from '../CommentBar';
import { CreatedTime } from '../CreatedTime';
import { Name } from '../Name';

export const Comment: FC = () => {
  return (
    <div className='flex gap-x-2 border-b border-[#C7C7C7] last:border-none pb-2.5 '>
      <Avatar avatar='A' />
      <div className='flex flex-col gap-y-2'>
        <div>
          <Name name='Name' />
          <CreatedTime time='17:17' />
        </div>
        <Body
          isEditable={false}
          text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias aut
            culpa dignissimos distinctio fugiat iusto nesciunt nulla omnis sint!
            Cupiditate dicta distinctio doloremque esse impedit, iste officiis
            omnis possimus.'
        />
        <CommentBar onDelete={() => {}} onEdit={() => {}} />
      </div>
    </div>
  );
};
