import React, { useState } from "react";
import { Link } from "react-router-dom";


// export default function HeaderLanding({ logoutModalHandler, sidebarHandler }) {
export default function HeaderLanding () {


  const [tab, setTab] = useState("explore");
  const navigateToPage = (value) => {
    setTab(value);
  };

  return (
    <>
      {/* <div className="header-wrapper backdrop-blur-sm bg-[#efedfe5e]/60 w-full h-full flex items-center xl:px-0 md:px-10 px-5"> */}
      <div className="header-wrapper backdrop-blur-sm bg-[#efedfB5e]/60 w-full h-full flex items-center xl:px-0 md:px-10 px-5">
        <div className="flex justify-between items-center w-full">
          <button
            className="xl:hidden block mr-10"
            type="button"
          >
            <svg
              width="25"
              height="19"
              viewBox="0 0 25 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.3544 8.45953L16.9855 0.271831C16.8283 0.0982522 16.6089 0 16.3763 0H11.4637C11.1411 0 10.848 0.189955 10.7153 0.484712C10.5843 0.781107 10.6384 1.12663 10.8545 1.36571L17.7306 9.00647L10.8545 16.6456C10.6384 16.8863 10.5827 17.2318 10.7153 17.5266C10.848 17.823 11.1411 18.0129 11.4637 18.0129H16.3763C16.6089 18.0129 16.8283 17.913 16.9855 17.7427L24.3544 9.55505C24.6344 9.24391 24.6344 8.76903 24.3544 8.45953Z"
                fill="url(#paint0_linear_700_68145)"
              />
              <path
                d="M13.7104 8.45953L6.34147 0.271831C6.18427 0.0982522 5.96484 0 5.73231 0H0.819691C0.497095 0 0.203976 0.189955 0.071335 0.484712C-0.0596682 0.781107 -0.00562942 1.12663 0.210526 1.36571L7.08656 9.00647L0.210526 16.6456C-0.00562942 16.8863 -0.0613058 17.2318 0.071335 17.5266C0.203976 17.823 0.497095 18.0129 0.819691 18.0129H5.73231C5.96484 18.0129 6.18427 17.913 6.34147 17.7427L13.7104 9.55505C13.9904 9.24391 13.9904 8.76903 13.7104 8.45953Z"
                fill="url(#paint1_linear_700_68145)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_700_68145"
                  x1="10.644"
                  y1="0"
                  x2="28.9548"
                  y2="13.8495"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F539F8" />
                  <stop offset="0.416763" stopColor="#C342F9" />
                  <stop offset="1" stopColor="#5356FB" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_700_68145"
                  x1="0"
                  y1="0"
                  x2="18.3108"
                  y2="13.8495"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F539F8" />
                  <stop offset="0.416763" stopColor="#C342F9" />
                  <stop offset="1" stopColor="#5356FB" />
                </linearGradient>
              </defs>
            </svg>
          </button>

          <div className="market-place-section w-full">
            <div className="market-place-wrapper w-full">
              <div className="filter-navigate-area lg:flex justify-between mt-5">
                <div className="tab-item lg:mb-0 mb-5">
                  <div className="md:flex md:space-x-8 space-x-2">
                    <span
                      onClick={() => navigateToPage("explore")}
                      className={`md:text-[18px] text-md  text-dark-gray hover:text-pink border-b  hover:border-pink font-medium ${tab === "explore"
                        ? "text-pink border-pink"
                        : " border-transparent"
                        }`}
                    >
                      Explore
                    </span>
                    <span
                      onClick={() => navigateToPage("artist")}
                      className={`md:text-[18px] text-md  text-dark-gray hover:text-pink border-b  hover:border-pink font-medium ${tab === "artist"
                        ? "text-pink border-pink"
                        : " border-transparent"
                        }`}
                    >
                      Community
                    </span>
                    <span
                      onClick={() => navigateToPage("market")}
                      className={`md:text-[18px] text-md  text-dark-gray hover:text-pink border-b  hover:border-pink font-medium ${tab === "market"
                        ? "text-pink border-pink"
                        : " border-transparent"
                        }`}
                    >
                      Roadmap
                    </span>
                    <span
                      onClick={() => navigateToPage("shop")}
                      className={`md:text-[18px] text-md  text-dark-gray hover:text-pink border-b  hover:border-pink font-medium ${tab === "shop"
                        ? "text-pink border-pink"
                        : " border-transparent"
                        }`}
                    >
                      About
                    </span>
                  </div>
                </div>


              </div>

            </div>
          </div>

          {/* user info */}
          <div className="user-info flex items-center justify-end w-full lg:space-x-7 space-x-2 z-10 ">
            {/* balance */}

            <div className="flex-1 flex lg:justify-end">
              <div className="flex items-center space-x-5">
                <Link
                  to="/dashboard"
                  className="w-40 h-11 flex justify-center items-center btn-gradient text-base rounded-full text-white"
                >
                  Launch App
                </Link>

              </div>
            </div>

          </div>
        </div>
      </div>

    </>
  );
}
