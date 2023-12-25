import React from 'react';
import { MainLayout } from './layouts/MainLayout';

function App() {
  return (
    <div className='w-screen h-screen'>
      <MainLayout>
        <div className='content w-full bg-gray-500 text-white flex flex-col items-center justify-center'>
          <div>body</div>
        </div>
      </MainLayout>
    </div>
  );
}

export default App;
