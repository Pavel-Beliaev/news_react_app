import React, { FC } from 'react';
import { changeFormatDate, parserURL } from '../../../utils';
import { Post } from '../../Posts';
import { Image } from '../../Image';
import { ResultType } from '../../../store';

type PropsType = {
  card: ResultType;
};
export const Card: FC<PropsType> = ({ card }) => {
  return (
    <div className='grid grid-cols-[0.5fr_2fr_1fr] pb-[24px]'>
      <div className='text-[14px] text-[grey]'>
        {changeFormatDate(card.pub_date)}
      </div>
      <div>
        <Post
          type='notImg'
          articleData={{
            title: card.headline.main,
            byline: card.byline.original,
            url: card.web_url,
            created_date: card.pub_date,
            img: card.multimedia.length
              ? `https://www.nytimes.com/${card.multimedia[0].url}`
              : '',
            copyright: card.multimedia.length ? card.multimedia[0].credit : '',
            caption: card.multimedia.length ? card.multimedia[0].caption : '',
            description: card.abstract,
          }}
          title={card.headline.main}
          description={card.abstract}
          size='L'
          time=''
          idArticle={parserURL(card.uri)}
          author={card.news_desk}
        />
        <div className='text-[12px] font-serif'>{card.byline.original}</div>
      </div>
      {!!card.multimedia.length && (
        <div className='w-[200px] h-[133px] rounded overflow-hidden place-self-end self-start'>
          <Image src={`https://www.nytimes.com/${card.multimedia[0].url}`} />
        </div>
      )}
    </div>
  );
};
