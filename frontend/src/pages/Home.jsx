import React from 'react';
import Sidebar from '../components/Home/Sidebar';
import { Outlet } from 'react-router-dom';

const Home = ({ isAdmin }) => {
  return (
    <div className='flex h-[98vh]'>
      <div className='w-1/6 border border-transparent rounded p-4 flex flex-col justify-between'>
        <Sidebar isAdmin={isAdmin} />
      </div>
      <div className='w-5/6 border border-transparent rounded p-4 flex flex-col justify-between'>
        <Outlet />
      </div>
      <div className="absolute bottom-0 mb-4 right-2 md:right-4 lg:right-6 text-gray-700 text-xs sm:text-sm md:text-base text-right">
        {/* <h3>@Developed By Wealth Zone Technologies</h3> */}
      </div>
    </div>
  );
};

export default Home;