import Image from "next/image";
import React from "react";
import { BsCalendar3 } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";

function PlanDetails() {
  return (
    <div className="grid grid-cols-[14rem_1fr_.6fr] gap-4">
      <div className="gap-4 grid grid-rows-4">
        <div className="relative">
          <Image
            src="/images/plan-img.png"
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
        <div className="relative">
          <Image
            src="/images/plan-img.png"
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
        <div className="relative">
          <Image
            src="/images/plan-img.png"
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
        <div className="relative">
          <Image
            src="/images/plan-img.png"
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
      </div>
      <div className="relative">
        <Image
          className=""
          layout="fill"
          src="/images/plan-img.png"
          objectFit="cover"
          alt=""
        />
      </div>
      <div className="">
        <div className="-text-yellow -bg-yellow-200 rounded-lg w-full p-2 text-center border-[1px] -border-yellow text-sm mb-4">
          Last Few Spots
        </div>

        <div className="mb-8">
          <p className="-text-gray text-xl font-normal text-right">from</p>
          <p className="text-3xl font-bold -text-blue-300 text-right">
            $119.00
          </p>
        </div>

        <div className="bg-[#F4F4F4] py-4 px-4 mb-4">
          <h4 className="text-xl font-bold -text-blue mb-4">
            Select Date and Travelers
          </h4>

          <form className="grid gap-4">
            <div className="relative">
              <input
                placeholder="Enter full name here."
                className="text-sm text-black opacity-80 w-full h-full py-3 px-4 border-[1px] border-[#707070] rounded-md bg-white outline-none"
              />
              <BsCalendar3 className="text-black opacity-70 text-xl absolute top-1/2 -translate-y-1/2 right-4" />
            </div>
            <div className="relative">
              <div className="text-sm text-black opacity-80 w-full h-full py-3 px-4 border-[1px] border-[#707070] rounded-md bg-white outline-none">
                2 Adults
              </div>
              <HiOutlineUserGroup className="text-black opacity-70 text-xl absolute top-1/2 -translate-y-1/2 right-4" />
            </div>

            <button
              type="submit"
              className="w-full p-2 -bg-green rounded-md -text-yellow-200 text-base font-bold"
            >
              Check Availability
            </button>
          </form>
        </div>

        <img src="images/map.png" alt="" />
      </div>
    </div>
  );
}

export default PlanDetails;
