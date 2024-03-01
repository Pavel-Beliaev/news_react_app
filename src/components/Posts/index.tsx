import React, { FC } from 'react';
import { Author } from '../Author';
import { Title } from '../Title';
import { Description } from '../Description';
import { Image } from '../Image';
import { NavLink } from 'react-router-dom';
import { CustomButton } from '../CustomButton';
import { SVG } from '../../assets';
import { setArticleData, useAppDispatch } from '../../store';
import { useTimeAgo } from '../../hoocks';
import { PropsType } from './types';

export const Post: FC<PropsType> = ({
  type,
  articleData,
  title,
  size,
  time,
  idArticle,
  author,
  description,
  byline,
  img,
  isShare,
  copyright,
  isRevers,
}) => {
  const dispatch = useAppDispatch();
  const fetchArticleData = () => {
    dispatch(setArticleData(articleData));
  };
  const dateCreated = time && new Date(time).toISOString();
  const { timeAgo } = useTimeAgo(dateCreated);

  switch (type) {
    case 'notImg':
      return (
        <NavLink
          to={`/article/${idArticle}`}
          onClick={fetchArticleData}
          className='flex flex-col gap-y-1 post group'>
          <div>
            {!!author && <Author author={author} />}
            <Title title={title} size={size} />
          </div>
          {!!description && <Description text={description} />}
          <div className='flex items-center justify-between text-[10px] text-[#727272] uppercase whitespace-nowrap'>
            {timeAgo}
            <CustomButton skin='dots'>
              <SVG.DotsIcon
                w='14'
                h='14'
                fill='#727272'
                className='hover:fill-[#121212]'
              />
            </CustomButton>
          </div>
        </NavLink>
      );
    case 'imgUpDown':
      return (
        <NavLink
          to={`/article/${idArticle}`}
          onClick={fetchArticleData}
          className={`flex ${
            isRevers ? 'flex-col-reverse' : 'flex-col'
          } post group gap-y-2.5`}>
          {!!img && <Image url={img} imgAuthor={copyright} />}
          <div className='flex flex-col'>
            {!!author && <Author author={author} />}
            <Title title={title} size={size} />
            {!!description && <Description text={description} />}
            <div className='grid grid-cols-[1fr_2fr_1fr] text-[10px] text-[#727272] uppercase whitespace-nowrap'>
              {timeAgo}
              <span>{!!byline && byline}</span>
              {isShare && (
                <CustomButton skin='dots'>
                  <SVG.DotsIcon
                    w='14'
                    h='14'
                    fill='#727272'
                    className='hover:fill-[#121212]'
                  />
                </CustomButton>
              )}
            </div>
          </div>
        </NavLink>
      );
    case 'imgInner':
      return (
        <NavLink
          to={`/article/${idArticle}`}
          onClick={fetchArticleData}
          className='flex gap-x-2 post  group'>
          <div className='flex flex-col gap-y-2'>
            {!!author && <Author author={author} />}
            <Title title={title} size={size} />
            <div>
              <div className='pl-1 float-right w-[120px] h-auto'>
                <Image url={img!} />
              </div>
              <Description text={description} />
            </div>
            <div className='grid grid-cols-[1fr_2fr_1fr] text-[10px] text-[#727272] uppercase whitespace-nowrap'>
              {timeAgo}
              <span>{!!byline && byline}</span>
              {isShare && (
                <CustomButton skin='dots'>
                  <SVG.DotsIcon
                    w='14'
                    h='14'
                    fill='#727272'
                    className='hover:fill-[#121212]'
                  />
                </CustomButton>
              )}
            </div>
          </div>
        </NavLink>
      );
    case 'gridPosts':
      return (
        <NavLink
          to={`/article/${idArticle}`}
          onClick={fetchArticleData}
          className='flex flex-col gap-y-2'>
          <Image url={img!} />
          <Title title={title} size={size} />
        </NavLink>
      );
    default:
      return (
        <NavLink
          to={`/article/${idArticle}`}
          onClick={fetchArticleData}
          className='flex gap-x-2 post  group'>
          <div className='flex flex-col flex-[0_1_50%] gap-y-1'>
            {!!author && <Author author={author} />}
            <Title title={title} size={size} />
            <div className='grid grid-cols-[1fr_2fr_1fr] text-[10px] text-[#727272] uppercase whitespace-nowrap'>
              {timeAgo}
              <span>{!!byline && byline}</span>
              {isShare && (
                <CustomButton skin='dots'>
                  <SVG.DotsIcon
                    w='14'
                    h='14'
                    fill='#727272'
                    className='hover:fill-[#121212]'
                  />
                </CustomButton>
              )}
            </div>
          </div>
          <div className='flex-[0_1_50%]'>
            <Image url={img!} />
          </div>
        </NavLink>
      );
  }
};
