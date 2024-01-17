import React, { FC } from 'react';
import { Author } from '../Author';
import { Title } from '../Title';
import { Time } from '../Time';
import { Description } from '../Description';
import { Image } from '../Image';
import { NavLink } from 'react-router-dom';
import { CustomButton } from '../CustomButton';
import { DotsIcon } from '../../assets/SVG/DotsIcon';
import { ArticleDataType } from '../../store/articleSlice/types';
import { useAppDispatch } from '../../store/store';
import { setArticleData } from '../../store/articleSlice/slice';

type PropsType = {
  type: 'notImg' | 'imgUpDown' | 'imgRight';
  articleData: ArticleDataType;
  title: string;
  size: 'S' | 'M' | 'L';
  time: string;
  idArticle: string;
  author?: string;
  description?: string;
  byline?: string;
  img?: string;
  isShare?: boolean;
  copyright?: string;
  isRevers?: boolean;
};

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

  switch (type) {
    case 'notImg':
      return (
        <NavLink
          to={`article/${idArticle}`}
          onClick={fetchArticleData}
          className='flex flex-col gap-y-1 post group'>
          <div>
            {!!author && <Author author={author} />}
            <Title title={title} size={size} />
          </div>
          {!!description && <Description text={description} />}
          <div className='flex items-center justify-between'>
            <Time time={time} />
            <CustomButton skin='dots'>
              <DotsIcon
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
          to={`article/${idArticle}`}
          onClick={fetchArticleData}
          className={`flex ${
            isRevers ? 'flex-col-reverse' : 'flex-col'
          } post group gap-y-2.5`}>
          {!!img && <Image url={img} imgAuthor={copyright} />}
          <div className='flex flex-col'>
            {!!author && <Author author={author} />}
            <Title title={title} size={size} />
            {!!description && <Description text={description} />}
            <div className='flex items-center justify-between'>
              <Time time={time} />
              {!!byline && <span>{byline}</span>}
              {isShare && (
                <CustomButton skin='dots'>
                  <DotsIcon
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
    default:
      return (
        <NavLink
          to={`article/${idArticle}`}
          onClick={fetchArticleData}
          className='flex gap-x-2 post  group'>
          <div className='flex flex-col flex-[0_1_50%] gap-y-1'>
            {!!author && <Author author={author} />}
            <Title title={title} size={size} />
            <Description text={description} />
            <div className='flex items-center justify-between'>
              <Time time={time} />
              {!!byline && <span>{byline}</span>}
              {isShare && (
                <CustomButton skin='dots'>
                  <DotsIcon
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
