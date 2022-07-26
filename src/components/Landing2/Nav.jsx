import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className='hidden lg:flex'>
    <ul className='flex items-center space-x-12 font-secondary'>
      <li className='nav-link'>
        <a href='#'>Explore</a>
      </li>
      <li className='nav-link'>
        <a href='#'>Roadmap</a>
      </li>
      <li className='nav-link'>
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

export default Nav;
