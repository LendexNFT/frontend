import React from 'react';

// import images
import Headset1 from '../../assets/images/headset-1.png';
import Headset2 from '../../assets/images/headset-2.png';
import Headset3 from '../../assets/images/headset-3.png';
import Headset4 from '../../assets/images/headset-4.png';

const Headsets = () => (
  <section className='py-12 lg:py-24'>
    <div className='container mx-auto'>
      {/* title */}
      <h2
        className='text-3xl font-bold mb-6'
        data-aos='fade-down'
        data-aos-offset='300'
      >
        Features & Functionalities
      </h2>
      {/* grid */}
      <div className='grid gap-y-4 lg:grid-cols-2 lg:gap-9'>
        {/* item */}
        <div
          className='relative'
          data-aos='zoom-in'
          data-aos-offset='300'
          data-aos-delay='1000'
        >
          <img src={Headset1} alt='' />
          <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
            <h4 className='font-semibold text-xl mb-2'>Exchange</h4>
            <p>
              This protocol allows users to simply exchange an asset ‘A’ for an asset ‘B’ or a group of assets.
            </p>
          </div>
        </div>
        {/* item */}
        <div
          className='relative'
          data-aos='zoom-in'
          data-aos-offset='300'
          data-aos-delay='1300'
        >
          <img src={Headset2} alt='' />
          <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
            <h4 className='font-semibold text-xl mb-2'>Lending</h4>
            <p>
              Users can loan their assets in a secure and trustless peer-to-peer manner by customizing a Lending order.
            </p>
          </div>
        </div>
        {/* item */}
        <div
          className='relative'
          data-aos='zoom-in'
          data-aos-offset='300'
          data-aos-delay='1600'
        >
          <img src={Headset3} alt='' />
          <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
            <h4 className='font-semibold text-xl mb-2'>Borrowing</h4>
            <p>
              Users can borrow assets in a secure and trustless peer-to-peer manner by customizing a Borrowing order.
            </p>
          </div>
        </div>
        {/* item */}
        <div
          className='relative'
          data-aos='zoom-in'
          data-aos-offset='300'
          data-aos-delay='1900'
        >
          <img src={Headset4} alt='' />
          <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
            <h4 className='font-semibold text-xl mb-2'>Pawning</h4>
            <p>
              Nubicuo users can pawn their digital assets for a certain amount of time receiving in exchange a fixed amount of money on a stablecoin in return.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Headsets;
