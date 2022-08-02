import React from 'react';

// import images
import Avatar1 from '../../assets/images/avt1.png';
import Avatar2 from '../../assets/images/avt2.png';
import Avatar3 from '../../assets/images/avt3.png';
import Avatar4 from '../../assets/images/avt4.png';
import Icons from '../Helpers/Icons';

// import icons

const Team = () => (
  <div
    className='flex flex-col justify-center items-center space-x-5 space-y-2 lg:flex-row lg:space-y-0 lg:justify-start'
    data-aos='fade-down'
    data-aos-delay='900'
  >
    <div className='flex -space-x-2'>
      <div className='w-12 h-12 rounded-full'>
        <img src={Avatar1} alt='' />
      </div>
      <div className='w-12 h-12 rounded-full'>
        <img src={Avatar2} alt='' />
      </div>
      <div className='w-12 h-12 rounded-full'>
        <img src={Avatar3} alt='' />
      </div>
      <div className='w-12 h-12 rounded-full'>
        <img src={Avatar4} alt='' />
      </div>
    </div>
    <div className='flex items-center space-x-2 font-secondary font-medium'>
      {/* <BsFillCircleFill className='text-xs text-green-500 animate-pulse' /> */}
      <Icons className='text-xs text-green-500 animate-pulse' />
      <div>28k users</div>
    </div>
  </div>
);

export default Team;
