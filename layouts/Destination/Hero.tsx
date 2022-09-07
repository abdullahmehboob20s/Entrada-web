import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { BiSun } from "react-icons/bi";
import HeroPlaceSelector from "layouts/HeroPlaceSelector";

function Hero() {
  return (
    <div className="container pb-20 py-12 px-20 flex-1 flex flex-col justify-center">
      <div className="mb-10 xl:mb-14">
        <h4 className="text-base xl:text-2xl text-white font-normal mb-3">
          - Justinian Castle of
        </h4>
        <h1 className="text-5xl xl:text-8xl font-bold text-white">Petrela</h1>
      </div>

      <div className="">
        <div className="mb-8 flex item-center justify-between">
          <div className="flex space-x-2 items-center">
            <button className="w-[28px] md:w-[30px] xl:w-[38px] h-[28px] md:h-[30px] xl:h-[38px] 2xl:w-[48px] 2xl:h-[48px] rounded-full border-2 border-white flex items-center justify-center text-sm md:text-base 2xl:text-2xl text-white">
              <FiArrowLeft />
            </button>
            <button className="w-[28px] md:w-[30px] xl:w-[38px] h-[28px] md:h-[30px] xl:h-[38px] 2xl:w-[48px] 2xl:h-[48px] rounded-full border-2 border-white flex items-center justify-center text-sm md:text-base 2xl:text-2xl text-white">
              <FiArrowRight />
            </button>
          </div>

          <div className="flex flex-col items-end space-y-2">
            <BiSun className="text-white text-3xl xl:text-4xl" />
            <p className="text-base xl:text-xl text-white font-medium">
              -02 C Very Cold
            </p>
          </div>
        </div>

        <HeroPlaceSelector />
      </div>
    </div>
  );
}

export default Hero;