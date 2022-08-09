import React from 'react';

// import components
import Logo from '../../assets/images/logo-nubicuo.png';
import Nav from './Nav';

// import icons
// import { HiMenu } from 'react-icons/hi';
import Icons from '../Helpers/Icons';

const Header = ({ setNavMobile }) => (
  <header
    className='py-6'
    data-aos='fade-down'
    data-aos-duration='1000'
    data-aos-delay='900'
  >
    <div className='container mx-auto'>
      <div className='flex items-center justify-between'>
        {/* logo */}
        <a href='#'>
          <img className='w-1/4' src={Logo} alt='' />
        </a>
        {/* nav */}
        <Nav />
        {/* nav mobile btn */}
        <Icons
          onClick={() => setNavMobile(true)}
          className='lg:hidden text-3xl text-white cursor-pointer'
        />
      </div>
    </div>
  </header>
);

export default Header;
