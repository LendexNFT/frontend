import React from "react";
import crescentSword from "../../assets/images/crescent-sword.png";

function Hero () {
  return (
    <div className="lg:grid grid-cols-2 gap-3 items-center">
      <div className="col-span-1 py-12 lg:py-0">
        <h1 className="2xl:text-5xl lg:text-4xl sm:text-5xl text-4xl leading-snug 2xl:leading-snug sm:leading-snug lg:leading-snug font-headtext-pink text-pink tracking-wide">
          Your NFT belong <br />
          <span className=" text-whites">All the tools of the DEFI world. But in GAMING.</span>
        </h1>
        <h1 className="font-medium text-lightBlack mt-3">
          Sells Or Buy? It Doesn't Matter, Trade Person To Person.
        </h1>

        <button
          type="button"
          className="btn-shine w-[116px] h-[46px] text-white rounded-full text-base bg-pink flex justify-center items-center mt-20"
        >
          Explore
        </button>
      </div>
      <div className="hero lg:block hidden">
        <img src={crescentSword} alt="data"
          className="w-full h-full" />
      </div>
    </div>
  );
}

export default Hero;
