import React from 'react';
import { Link } from 'react-router-dom';
// import components

// import image
import Img from '../../assets/images/banner-img.png';
import Team from './Team';

const Banner = () => (
  <section className='min-h-[600px] pt-24 pb-12 text-center relative lg:pt-48 lg:pb-0 lg:text-left'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* text */}
        <div>
          <h1
            className='text-3xl font-bold mb-8 lg:text-5xl lg:leading-snug'
            data-aos='fade-down'
            data-aos-delay='500'
          >
            Let's Explore <br /> Three-Dimensional Visually.
          </h1>
          <p
            className='font-secondary mb-12 max-w-[440px] mx-auto lg:mx-0'
            data-aos='fade-down'
            data-aos-delay='600'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            doloribus inventore harum cumque blanditiis minima.
          </p>
          {/* btns */}
          <div
            className='flex items-center justify-around space-x-4 max-w-[320px] mx-auto mb-12 lg:space-x-8 lg:mx-0 lg:max-w-none lg:justify-start'
            data-aos='fade-down'
            data-aos-delay='700'
          >
            <Link
              to="#"
              className="w-40 h-11 flex justify-center items-center btn-gradient text-base rounded-full text-white"
            >
              Explore
            </Link>
            <Link
              to="/dashboard"
              className="w-40 h-11 flex justify-center items-center btn-gradient text-base rounded-full text-white"
            >
              Launch App
            </Link>
          </div>
          <Team />
        </div>
        {/* image */}
        <div data-aos='fade-up' data-aos-delay='800'>
          <img src={Img} alt='' />
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
