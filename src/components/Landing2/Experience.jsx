import React from 'react';

// import images
import Img1 from '../../assets/images/exp-img1.png';
import Img2 from '../../assets/images/exp-img2.png';

const Experience = () => (
  <section className='mb-12 lg:mb-24'>
    <div className='container mx-auto'>
      <div className='flex flex-col min-h-[480px] lg:space-x-20 lg:flex-row'>
        <div className='flex-1 flex space-x-6 items-center lg:space-x-12'>
          {/* images */}
          <div
            className='self-start'
            data-aos='fade-down'
            data-aos-offset='400'
          >
            <img src={Img1} alt='' />
          </div>
          <div className='self-end' data-aos='fade-up'>
            <img src={Img2} alt='' />
          </div>
        </div>
        {/* text */}
        <div
          className='flex-1 flex flex-col items-start justify-center mt-6 lg:mt-0'
          data-aos='fade-left'
          data-aos-offset='400'
        >
          <h2 className='text-3xl font-bold mb-6'>
            New Experience In Peer-to-peer Trading
          </h2>
          <p className='font-secondary mb-6'>
            Users can trade their assets in a secure, customized and trustless peer-to-peer
            manner by using Nubicuo protocol. In every case, the Taker should complete the
            Maker exchange order correctly due to fulfill requirements and close the deal.
          </p>
          {/* <button className='btn' type="button">Get it now</button> */}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
