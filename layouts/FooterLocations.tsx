import Link from "next/link";
import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function FooterLocations() {
  return (
    <div className="flex items-center justify-between border-t-[1px] border-b-[1px] border-[#70707042] py-6">
      <div>
        <h6 className="text-lg 2xl:text-2xl -text-green mb-2">
          Nearby Activity
        </h6>
        <h1 className="text-3xl 2xl:text-5xl font-medium max-w-[10em] -text-blue-300 leading-[1.4]">
          Adventures Calling You Guys!
        </h1>
      </div>

      <div className="flex space-x-4">
        <div className="-bg-green w-[60px] 2xl:w-[80px] h-[60px] 2xl:h-[80px] rounded-full flex items-center justify-center">
          <img src="images/global.png" className="w-[57%]" alt="" />
        </div>
        <div>
          <h6 className="text-lg 2xl:text-[26px] font-normal text-gray-400 mb-2 leading-[1]">
            Our Offices
          </h6>
          <h6 className="text-lg 2xl:text-[26px] font-medium mb-2">
            Nepal, USA, India
          </h6>
          <Link href="/">
            <a className="text-3xl 2xl:text-5xl">
              <HiOutlineArrowNarrowRight />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FooterLocations;
