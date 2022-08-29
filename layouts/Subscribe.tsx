import React from "react";
import { HiOutlineMail } from "react-icons/hi";

function Subscribe() {
  return (
    <div>
      <div className="container">
        <div className="flex flex-col space-y-8 sm:flex-row sm:space-y-0 sm:space-x-10 sm:items-center">
          <div className="flex-1 relative">
            <img
              src="images/dots.png"
              className="absolute top-[-6%] left-[-5.4%] z-[-2] w-[10%]"
              alt=""
            />
            <img src="images/subscribe-banner.png" className="w-full" alt="" />
          </div>

          <div className="flex-1 max-w-[26rem] sm:max-w-none">
            <div className="mb-10 xl:mb-16">
              <h5 className="font-normal text-sm xl:text-lg 2xl:text-2xl -text-green mb-2">
                Subscribe For Offers
              </h5>
              <h1 className="font-semibold -text-blue-300 text-2xl xl:text-4xl 2xl:text-5xl leading-[1.2] mb-6">
                Adventures Calling You Guys!
              </h1>

              <h4 className="text-sm xl:text-lg 2xl:text-2xl font-normal -text-blue ">
                The Brilliant reasons Entrada should be your one-stop-shop!
              </h4>
            </div>

            <form className="flex shadow-[0_16px_70px_-10px_rgba(0,97,92,.3)] mb-8 xl:mb-12">
              <div className="flex-1 relative">
                <span className="absolute top-[50%] left-[8%] translate-y-[-50%] text-lg md:text-xl xl:text-2xl text-gray-400">
                  <HiOutlineMail />
                </span>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="text-xs md:text-sm xl:text-base -text-blue font-normal border-none outline-none bg-white w-full h-full py-4 xl:py-[26px] 2xl:py-[32px] px-6 pl-[22%] md:pl-[18%]"
                />
              </div>
              <button
                type="submit"
                className="-bg-green text-white text-xs md:text-sm xl:text-lg 2xl:text-2xl font-medium px-6 xl:px-8"
              >
                Send Now!
              </button>
            </form>

            <p className="text-gray-400 text-xs xl:text-sm 2xl:text-base font-normal">
              Expect a reply in 2-3 working days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
