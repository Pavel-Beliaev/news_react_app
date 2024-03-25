import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { searchSlice, setPage, setSort, useAppDispatch } from '../../store';
import { Image, Post, SearchForm } from '../../components';
import { changeFormatDate, parserURL } from '../../utils';

export const SearchPage: FC = () => {
  const { searchData, value, status, countResults, page } =
    useSelector(searchSlice);
  const dispatch = useAppDispatch();

  const changePage = (n: number) => {
    dispatch(setPage(n));
  };

  useEffect(() => {
    const json = JSON.stringify(value);
    localStorage.setItem('search', json);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const formatNumber = (num: number): string => {
    return num
      .toString()
      .split('')
      .reverse()
      .map((el, i) => (i % 3 === 0 && i > 0 ? [' ', el] : el))
      .flat()
      .reverse()
      .join('');
  };

  const usePaginate = (
    totalPage: number,
    currentPage: number,
    range: number,
  ): number[] => {
    const newArray = Array.from(Array(totalPage).keys(), (n) => n + 1);
    const paginate = newArray.filter(
      (num) => num <= currentPage + range && num >= currentPage - range,
    );

    if (paginate.includes(1)) {
      paginate.push(0, totalPage);
      return paginate;
    } else if (paginate.includes(totalPage)) {
      paginate.unshift(1, 0);
      return paginate;
    } else {
      paginate.unshift(1, 0);
      paginate.push(0, totalPage);
      return paginate;
    }
  };

  const paginate = usePaginate(200, page, 3);

  const handleArrow = <T extends 'next' | 'prev'>(
    page: number,
    type: T,
  ): void => {
    if (type === 'next') {
      dispatch(setPage(page + 1));
    } else dispatch(setPage(page - 1));
  };

  return (
    <>
      <div className=' flex flex-wrap justify-between items-center w-full border-b border-[#C7C7C7] p-[28px_0_10px_0] mb-[24px]'>
        <span className='flex-[0_1_100%] text-[grey] font-serif'>
          Showing {formatNumber(countResults)} results for:
        </span>
        <div className='flex-[0_1_70%]'>
          <SearchForm isVisible={false} buttonType={2} />
        </div>
        <div className='flex-[0_1_15%] border rounded border-transparent hover:border-[#C7C7C7] justify-center p-[8px]'>
          <select
            className='bg-transparent text-[18px]'
            defaultValue={'relevance'}
            onChange={(event) => dispatch(setSort(event.target.value))}>
            <option value={'relevance'}>Sort by Relevance</option>
            <option value={'newest'}>Sort by Newest</option>
            <option value={'oldest'}>Sort by Oldest</option>
          </select>
        </div>
      </div>
      <div className='flex flex-col gap-y-[24px]'>
        {!!searchData.length && status === 'success' ? (
          searchData.map((card) => (
            <div
              key={card.web_url}
              className='grid grid-cols-[0.5fr_2fr_1fr] pb-[24px]'>
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
                    copyright: card.multimedia.length
                      ? card.multimedia[0].credit
                      : '',
                    caption: card.multimedia.length
                      ? card.multimedia[0].caption
                      : '',
                    description: card.abstract,
                  }}
                  title={card.headline.main}
                  description={card.abstract}
                  size='L'
                  time=''
                  idArticle={parserURL(card.uri)}
                  author={card.news_desk}
                />
                <div className='text-[12px] font-serif'>
                  {card.byline.original}
                </div>
              </div>
              {!!card.multimedia.length && (
                <div className='w-[200px] h-[133px] rounded overflow-hidden place-self-end self-start'>
                  <Image
                    src={`https://www.nytimes.com/${card.multimedia[0].url}`}
                  />
                </div>
              )}
            </div>
          ))
        ) : (
          <div className='relative flex justify-center items-center p-[24px]'>
            <div className='circle' />
            <div className='circle-inner-top' />
            <div className='circle-inner-right' />
          </div>
        )}
      </div>
      <div className='flex justify-center items-center w-full gap-x-2.5 p-[15px]'>
        <button
          onClick={() => handleArrow(page, 'prev')}
          className='w-[15px] h-[15px]  select-none p-[20px] rounded flex justify-center items-center cursor-pointer hover:bg-yellow-100'>
          {'<'}
        </button>
        {paginate.map((n, i) => (
          <button
            key={i}
            disabled={n === 0}
            onClick={() => changePage(n)}
            className={`w-[15px] h-[15px]  select-none p-[20px] rounded flex justify-center items-center ${
              n !== 0 ? 'cursor-pointer hover:bg-yellow-100' : ''
            } ${n === page ? 'bg-yellow-100' : ''}`}>
            {n === 0 ? '...' : n}
          </button>
        ))}
        <button
          onClick={() => handleArrow(page, 'next')}
          className='w-[15px] h-[15px]  select-none p-[20px] rounded flex justify-center items-center cursor-pointer hover:bg-yellow-100'>
          {'>'}
        </button>
      </div>
    </>
  );
};
