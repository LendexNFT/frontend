import React from 'react';
import { Link } from 'react-router-dom';
import Icons from '../Helpers/Icons';

// import icons
// import { IoClose } from 'react-icons/io5';

const NavMobile = ({ setNavMobile }) => (
  <nav className='lg:hidden bg-[#251f3f] w-full h-full'>
    {/* <IoClose */}
    <Icons
      onClick={() => setNavMobile(false)}
      className='text-3xl absolute left-4 top-6 cursor-pointer'
    />
    <ul className='flex flex-col items-center justify-center space-y-8 h-full font-secondary'>
      <li className='text-lg'>
        <a href='#'>Explore</a>
      </li>
      <li className='text-lg'>
        <a href='#'>Roadmap</a>
      </li>
      <li className='text-lg'>
        <a href='#'>About</a>
      </li>
      <li className='btn'>
        <Link
          to="/dashboard"
          className="w-40 h-11 flex justify-center items-center btn-gradient text-base rounded-full text-white"
        >
          Launch App
        </Link>
      </li>
    </ul>
  </nav>
);

export default NavMobile;
