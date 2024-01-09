import React, { useEffect } from 'react';

import { useAppDispatch } from './store/store';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import { Header } from './components';
import {
  fetchCultureNews,
  fetchMoreNews,
  fetchSundayreview,
  fetchTopStories,
} from './store/mainNewsSlice/actions';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTopStories());
    dispatch(fetchSundayreview());
    dispatch(fetchMoreNews());
    dispatch(fetchCultureNews());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='w-full h-auto bg-yellow-50 flex flex-col gap-y-0.5'>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
