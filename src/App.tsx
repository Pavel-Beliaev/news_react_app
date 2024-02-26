import React, { useCallback, useEffect, useState } from 'react';
import { fetchNews, searchSlice, useAppDispatch } from './store';
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

  const { status } = useSelector(searchSlice);
  const dispatch = useAppDispatch();

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
    dispatch(fetchNews());
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
