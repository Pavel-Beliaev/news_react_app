import React, { useCallback, useEffect, useState } from 'react';

import { useAppDispatch } from './store/store';
import { Content, Footer, Header, LeftSideBar } from './components';
import {
  fetchCultureNews,
  fetchMoreNews,
  fetchSundayreview,
  fetchTopStories,
} from './store/mainNewsSlice/actions';

function App() {
  const [isAble, setIsAble] = useState(false);
  const dispatch = useAppDispatch();

  const showSideBar = useCallback(() => {
    setIsAble(!isAble);
  }, [isAble]);

  const hideSideBar = useCallback(() => {
    setIsAble(false);
  }, []);

  useEffect(() => {
    dispatch(fetchTopStories());
    dispatch(fetchSundayreview());
    dispatch(fetchMoreNews());
    dispatch(fetchCultureNews());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='w-full relative h-auto bg-yellow-50 flex flex-col gap-y-0.5'>
      <Header onClick={showSideBar} />
      {isAble && <LeftSideBar onMouse={hideSideBar} />}
      <Content />
      <Footer />
    </div>
  );
}

export default App;
