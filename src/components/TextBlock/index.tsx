import React, { FC } from 'react';
import { Title } from '../Title';
import { Text } from '../Text';
import { ShareButton } from '../ShareButton';
import { Time } from '../Time';
import { Author } from '../Author';

type PropsType = {
  title?: string;
  text?: string;
  author?: string;
  time?: string;
  size: 'S' | 'M' | 'L';
};
export const TextBlock: FC<PropsType> = ({
  size,
  time,
  author,
  text,
  title,
}) => {
  // function name() {
  //   return <div>1</div>;
  // }
  //
  // function name2() {
  //   return <div>2</div>;
  // }
  //
  // function contentRender() {
  //   switch (size) {
  //     case 'S':
  //       return name();
  //     case 'M':
  //       return name2();
  //     default:
  //       return <div>3</div>;
  //   }
  // }

  return (
    <div className='flex flex-col group cursor-pointer gap-y-2 border-b border-[#DFDFDF] last:border-none pb-2 last:pb-0'>
      <div>
        {author && <Author author={author} />}
        <Title title={title} size={size} />
      </div>
      {text && <Text text={text} />}
      <div className='flex items-center justify-between'>
        <Time time={time} />
        <ShareButton />
      </div>
    </div>
  );
};
// contentRender();
