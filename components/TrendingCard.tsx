import React from "react";
import Badge from "./Badge";

interface Props {
  img: string;
}

function TrendingCard(props: Props) {
  return (
    <div className="flex-1 rounded-[20px] border-[1px] border-[#e6e6e65d] shadow-[1px_1px_4px_rgba(0,0,0,.2)]">
      <div className="p-4 pb-0">
        <div className="rounded-[20px] overflow-hidden flex relative">
          <Badge title="4.5" bgColor="#FEF2DE" />
          <img src={props.img} className="w-full" alt="" />
        </div>
      </div>

      <div className="p-8 pt-4">
        <div className="mb-6 2xl:mb-8">
          <h2 className="text-lg 2xl:text-2xl font-medium mb-1">
            Mountain Hiking Tour
          </h2>
          <p className="-text-blue text-sm 2xl:text-base font-normal">
            12 Places | 3 Activities
          </p>
        </div>

        <div className="flex items-center justify-between mb-10 2xl:mb-14">
          <h1 className="text-2xl 2xl:text-[32px] font-semibold -text-blue-300 text-underline">
            $895.50
          </h1>

          <button className="text-white -bg-blue-300 py-[8px] 2xl:py-[12px] px-5 2xl:px-6 rounded-[2rem] text-sm 2xl:text-lg">
            Book Now
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <img
            src="images/C-icon.png"
            className="w-[40px] 2xl:w-[56px]"
            alt=""
          />
          <div>
            <h6 className="text-sm 2xl:text-lg font-medium -text-blue-300 mb-1">
              Advantages
            </h6>
            <p className="text-xs 2xl:text-lg font-medium -text-blue">
              Hiking Trips . Mountain . Safari
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingCard;
