import React, { useState } from 'react';
import { MainLayout } from './layouts/MainLayout';
import { Title } from './components/Title';
import { Link } from 'react-router-dom';

const NAVBAR = ['U.S.', 'World', 'Business', 'Arts', 'Lifestyle', 'Opinion'];

function App() {
  const [isAble, setIsAble] = useState(false);

  const showDropMenu = () => {
    setIsAble(true);
  };
  const hideDropMenu = () => {
    setIsAble(false);
  };

  return (
    <div className='w-screen h-screen'>
      <MainLayout>
        <div className='container flex justify-center w-full py-2 border-b-4 border-black'>
          <Title size='text-6xl' />
        </div>
        <div className='w-full mt-[2px] relative'>
          <ul className='bg-yellow-50 container flex justify-center border-y-2 border-black'>
            {NAVBAR.map((el) => (
              <li
                key={el}
                onMouseEnter={showDropMenu}
                className='flex items-center px-3.5 py-2.5 cursor-pointer hover:shadow hover:underline '>
                <Link to='/'>{el}</Link>
              </li>
            ))}
          </ul>
          {isAble && (
            <div
              onMouseLeave={hideDropMenu}
              className='bg-yellow-50 absolute w-full h-[200px] shadow-lg z-20'>
              <div className='container'>drop</div>
            </div>
          )}
        </div>

        {/*основные новости*/}
        <div className='bg-yellow-50 container border-t-2 border-black mt-1 pt-5 grid grid-cols-[repeat(20,1fr)] gap-x-[33px]'>
          <div className='grid col-start-1 col-end-[15]'>1</div>
          <div className='grid relative col-start-[15] col-end-[21] before:border-l before:border-black before:absolute before:h-full before:left-[-16px] '>
            2
          </div>
        </div>

        {/*больше новостей*/}
        <div className='container border-y-2 border-black pb-[24px] pt-[6px]'>
          <h2>More News</h2>
          <div className='grid grid-cols-[repeat(20,1fr)] gap-x-[16px]'>
            <div className='flex flex-col border-r pr-[16px] border-black col-start-[1] col-end-[6] '>
              1
            </div>
            <div className='col-start-[6] col-end-[15]'>1</div>
            <div className='col-start-[15] col-end-[21]'>1</div>
          </div>
        </div>

        {/*новости по категориям*/}
        <div></div>
      </MainLayout>
    </div>
  );
}

export default App;
