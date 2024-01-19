import React, { FC, FormEvent, useState } from 'react';
import { CustomButton } from '../../CustomButton';
import { CustomInput } from '../../CustomInput';
import { CustomTextarea } from '../../CustomTextarea';
import { useAppDispatch } from '../../../store/store';
import { commentsSlice, setComments } from '../../../store/commentSlice/slice';
import { useSelector } from 'react-redux';

export const CommentsForm: FC = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const { id } = useSelector(commentsSlice);
  const dispatch = useAppDispatch();
  const isAble = !!name && !!comment;

  const handlerComments = (event: FormEvent) => {
    event.preventDefault();
    dispatch(setComments([{ name: name, text: comment, id: id }]));
    setComment('');
    setName('');
  };
  return (
    <form
      onSubmit={handlerComments}
      className='flex flex-col gap-y-2.5 flex-[0_1_10%]'>
      <CustomInput placeholder='Your name' value={name} onChange={setName} />
      <CustomTextarea
        placeholder='Your comment'
        value={comment}
        onChange={setComment}
      />
      <CustomButton type={'submit'} isAble={!isAble} skin='long'>
        Add Comment
      </CustomButton>
    </form>
  );
};
