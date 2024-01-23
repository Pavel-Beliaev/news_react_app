import React, { useCallback, useEffect, useState } from 'react';
import {
  fetchCultureNews,
  fetchMoreNews,
  fetchSundayreview,
  fetchTopStories,
  searchSlice,
  useAppDispatch,
} from './store';
import {
  Content,
  ErrorRequest,
  Footer,
  Header,
  LeftSideBar,
} from './components';
import { useSelector } from 'react-redux';

function App() {
  const [isAble, setIsAble] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const dispatch = useAppDispatch();
  const { status } = useSelector(searchSlice);
  const isError = status === 'error';
  const onComponentCursor = useCallback(() => {
    setIsActive(!isActive);
  }, [isActive]);

  const showSideBar = useCallback(() => {
    setIsAble(!isAble);
  }, [isAble]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isActive) {
        setIsAble(false);
      }
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [isActive]);

  useEffect(() => {
    dispatch(fetchTopStories());
    dispatch(fetchSundayreview());
    dispatch(fetchMoreNews());
    dispatch(fetchCultureNews());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='w-full relative h-auto bg-yellow-50 flex flex-col gap-y-0.5'>
      {isError && <ErrorRequest />}
      <Header onClick={showSideBar} />
      {isAble && (
        <LeftSideBar
          onMouseEnter={onComponentCursor}
          onMouseLeave={onComponentCursor}
        />
      )}
      <Content />
      <Footer />
    </div>
  );
}

export default App;
