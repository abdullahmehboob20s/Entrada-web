import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { AiFillCaretDown } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

function Hero() {
  return (
    <header className="pt-8">
      <div className="container">
        <div className="relative pb-0 py-[5rem] px-24 2xl:py-[6.4rem] 2xl:px-32 h-full ">
          <div className="absolute top-0 left-0 w-full h-[90%] 2xl:h-[78%] z-[-10] -bg-green rounded-[34px]"></div>

          <h3 className="text-2xl text-white font-normal mb-6">
            - The Himalayan Mountain Ranges
          </h3>

          <h1 className="text-7xl 2xl:text-9xl font-bold text-white mb-16">
            Nepal Country
          </h1>

          <div className="flex justify-between">
            <div>
              <h3 className="text-lg 2xl:text-2xl text-white font-normal mb-6">
                -20℃ Very Cool
              </h3>

              <div className="flex space-x-4 items-center">
                <button className="w-[38px] h-[38px] 2xl:w-[48px] 2xl:h-[48px] rounded-full border-2 border-white flex items-center justify-center text-lg 2xl:text-2xl text-white">
                  <FiArrowLeft />
                </button>
                <button className="w-[38px] h-[38px] 2xl:w-[48px] 2xl:h-[48px] rounded-full border-2 border-white flex items-center justify-center text-lg 2xl:text-2xl text-white">
                  <FiArrowRight />
                </button>
              </div>
            </div>

            <div>
              <div className="flex space-x-[1rem]">
                <div className="w-[54px] 2xl:w-[64px] h-[54px] 2xl:h-[64px] bg-white rounded-full flex items-center justify-center">
                  <img
                    src="images/payment-cards.svg"
                    className="w-[50%]"
                    alt=""
                  />
                </div>
                <div>
                  <p className="text-lg 2xl:text-2xl text-white font-normal max-w-[15em] mb-3">
                    We Accept Payment Through All Cards & Banking
                  </p>
                  <button className="underline text-lg 2xl:text-2xl text-white font-bold">
                    Book Now!
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-selector-cards">
            <div className="">
              <h4 className="text-xl 2xl:text-[28px] font-semibold mb-3 2xl:mb-4 text-underline">
                Location
              </h4>

              <div className="flex items-center space-x-4 w-full">
                <input
                  type="text"
                  placeholder="Enter Your Destination…"
                  className="flex-1 w-full block text-base 2xl:text-lg font-normal border-none bg-transparent outline-none underline"
                />

                <span className="text-xl -text-black">
                  <GrLocation />
                </span>
              </div>
            </div>
            <div className="">
              <h4 className="text-xl 2xl:text-[28px] font-semibold mb-3 2xl:mb-4 text-underline">
                Activity
              </h4>

              <div className="flex items-center space-x-4 w-full">
                <input
                  type="text"
                  placeholder="Bungee Jump"
                  className="flex-1 w-full block text-base 2xl:text-lg font-normal border-none bg-transparent outline-none underline"
                />

                <button className="min-w-[20px] h-[20px] 2xl:min-w-[24px] 2xl:h-[24px] rounded-full border-[1px] -border-black flex items-center justify-center">
                  <AiFillCaretDown className="text-[10px] -text-black" />
                </button>
              </div>
            </div>
            <div className="">
              <h4 className="text-xl 2xl:text-[28px] font-semibold mb-3 2xl:mb-4 text-underline">
                Date
              </h4>

              <div className="flex items-center space-x-4 w-full ">
                <input
                  type="text"
                  placeholder="Set date"
                  className="flex-1 w-full block text-base 2xl:text-lg font-normal border-none bg-transparent outline-none underline"
                />

                <button className="w-[18px] 2xl:w-[24px]">
                  <img src="images/calendar.svg" className="w-full" alt="" />
                </button>
              </div>
            </div>
            <div className="flex justify-end items-center">
              <button className="h-full w-[4rem] rounded-2xl text-xl text-white -bg-green flex items-center justify-center">
                <BiSearch />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
