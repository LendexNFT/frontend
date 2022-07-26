// import React, { useEffect, useState } from "react";
// import { CartState } from "../../context/Context";
// import Header from "../Partials/Header";
// import Footer from "./Footer";
import Icons from "../Helpers/Icons";
import HeaderLanding from "../Partials/HeaderLanding";
import FooterLanding from "./FooterLanding";
import Hero from "./Hero";
// import Subcribe from "./Subcribe";
// import TopNFT from "./TopNFT";

export default function Landing () {


  const features = [
    {
      name: 'Secondary market',
      description:
        'What if I told you that you can sell the weapons that you have worked so hard to forge through this time?.',
      icon: Icons.LightningBoltIcon,
    },
    {
      name: 'In game money',
      description:
        'Or buy the weapon you\'ve always wanted with the rewards that the game\'s missions give you?.',
      icon: Icons.star,
    },
    {
      name: 'In-game financial services',
      description:
        'Or could you get a loan of items to pass that level that is so difficult?.',
      icon: Icons.history,
    },
    {
      name: 'Digital identity',
      description:
        'Build a reputation with your digital identity for better benefits.',
      icon: Icons.love,
    },
  ]

  return (
    <>

      {/* <div className="my-wallet-wrapper w-full mb-10">
        <div className="main-wrapper w-full">
          <div className="recent-and-investment grid lg:grid-cols-2 grid-cols-1 2xl:gap-[40px] xl:gap-7 gap-4 lg:h-[416px] w-full  justify-between">
             <div className=" h-full">
              <div className="investment-widget w-full min-h-max p-4 rounded-2xl bg-white flex flex-col justify-between">
                <Header />
                <Hero />
                <TopNFT />
                <Subcribe />
                <Footer />
              </div>
            </div>

          </div>
        </div>
      </div> */}

      <div className="settings-wrapper w-full relative mb-10">
        <div className="main-wrapper container md mx-auto">
          {/* heading */}

          <div className="content-heading w-full mb-8 lg:px-10 px-4">
            <div className="nft-header w-full lg:h-[100px] h-[70px] default-border-bottom z-40 xl:sticky fixed top-0 left-0 ">
              <HeaderLanding
              // sidebarHandler={() => setMobileSidebar.toggle()}
              // logoutModalHandler={logoutModalHandler}
              />
            </div>

          </div>

          <div className="content-container w-full pt-10 rounded-2xl">

            <div className="content-body w-full lg:flex lg:px-10 px-4">


              <Hero />


            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-white bg-opacity-25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600  leading-8 font-semibold tracking-wide uppercase">Go to NFT in Gaming</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything belongs to you

            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              What if you didn't have to get rid of your character that you've spent so much game time on?.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      {/* <feature.icon className="h-6 w-6" aria-hidden="true" /> */}
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="py-12 bg-pink-200 bg-opacity-25">

        {/* <div className="main-wrapper container md mx-auto">
          <Team />
        </div> */}
      </div>

      <div className="py-12 bg-pink-200 bg-opacity-25">

        <div className="main-wrapper container md mx-auto">
          <FooterLanding />
        </div>
      </div>





    </>
  );
}
