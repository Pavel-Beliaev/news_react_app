import React, { FC, useCallback, useState } from 'react';
import { Avatar } from '../Avatar';
import { Body } from '../Body';
import { CommentBar } from '../CommentBar';
import { CreatedTime } from '../CreatedTime';
import { Name } from '../Name';
import { getFirstLetter } from '../../../utils/getFirstLetter';
import { getDateNow } from '../../../utils/getDateNow';
import { useAppDispatch } from '../../../store/store';
import { setDelete } from '../../../store/commentSlice/slice';

type PropsType = {
  name: string;
  text: string;
  time: number;
  id: number;
};
export const Comment: FC<PropsType> = ({ name, text, time, id }) => {
  const [editAble, setEditAble] = useState(false);
  const dispatch = useAppDispatch();

  const handlerEdit = useCallback(() => {
    setEditAble(!editAble);
  }, [editAble]);

  const handlerDelete = () => {
    dispatch(setDelete(id));
  };

  return (
    <div className='flex gap-x-2 border-b border-[#C7C7C7] last:border-none pb-2.5 '>
      <Avatar avatar={getFirstLetter(name)} />
      <div className='flex flex-col gap-y-2'>
        <div>
          <Name name={name} />
          <CreatedTime time={getDateNow(time)} />
        </div>
        <Body isEditable={editAble} text={text} />
        <CommentBar
          onDelete={handlerDelete}
          onEdit={handlerEdit}
          isEdit={editAble}
        />
      </div>
    </div>
  );
};
