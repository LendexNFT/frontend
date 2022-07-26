import React, { useEffect, useState } from 'react';

// import components
import Aos from 'aos';
import Banner from './Banner';
import Experience from './Experience';
import Explore from './Explore';
import Header from './Header';
import Headsets from './Headsets';
import NavMobile from './NavMobile';

// import aos (animate on scroll)
import 'aos/dist/aos.css';

const Landing2 = () => {
  const [navMobile, setNavMobile] = useState(false);

  // aos initialization
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });

  return (
    <div className='relative overflow-hidden before:w-[600px] before:h-[200px] before:bg-circle before:bg-no-repeat before:absolute before:-top-16 before:left-[600px] before:hidden before:lg:flex'>
      <Header setNavMobile={setNavMobile} />
      <Banner />
      {/* mobile nav */}
      <div
        className={`${navMobile ? 'right-0' : '-right-full'
          } fixed top-0 bottom-0 w-48 transition-all`}
      >
        <NavMobile setNavMobile={setNavMobile} />
      </div>
      <Experience />
      <Headsets />
      <Explore />
    </div>
  );
};

export default Landing2;
