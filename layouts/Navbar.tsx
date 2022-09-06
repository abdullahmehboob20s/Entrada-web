import OutsideClickDetector from "hooks/OutsideClickDetector";
import Link from "next/link";
import React, { useState } from "react";
import { IoCloseSharp, IoMenu } from "react-icons/io5";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const sidebarRef = OutsideClickDetector(() => setSidebar(false));

  return (
    <>
      <nav className="container py-4 sm:py-6 2xl:py-10 flex items-center justify-between space-x-[50px] lg:space-x-[120px]">
        <div className="flex items-center">
          <h1 className="text-2xl md:text-3xl 2xl:text-[40px] font-semibold">
            Entrada
          </h1>
        </div>

        <button
          className="flex md:hidden text-2xl -text-blue-300"
          onClick={() => setSidebar((val) => !val)}
        >
          <IoMenu />
        </button>

        <div
          ref={sidebarRef}
          className={`flex flex-1 flex-col p-11 -bg-green md:p-0 md:bg-transparent justify-[unset] items-[unset] fixed top-0 right-0 w-[300px] h-screen md:static md:w-auto md:h-auto md:justify-between md:items-center md:flex-row space-y-8 md:space-y-0 z-[110] transition-all duration-[.3s] ${
            sidebar ? "translate-x-0" : "translate-x-[300px]"
          } md:translate-x-0`}
        >
          {/*  */}
          <button
            className="flex md:hidden text-white text-2xl ml-[-1.6%]"
            onClick={() => setSidebar((val) => !val)}
          >
            <IoCloseSharp />
          </button>
          {/*  */}
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:space-x-10">
            <Link href="/">
              <a className="text-white w-fit md:text-inherit text-base md:text-sm lg:text-base 2xl:text-xl font-medium">
                Destination
              </a>
            </Link>
            <Link href="/">
              <a className="text-white w-fit md:text-inherit text-base md:text-sm lg:text-base 2xl:text-xl font-medium">
                Bookings
              </a>
            </Link>
            <Link href="/">
              <a className="text-white w-fit md:text-inherit text-base md:text-sm lg:text-base 2xl:text-xl font-medium">
                Activities
              </a>
            </Link>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:items-center md:space-x-[24px] lg:space-x-[32px]">
            <button className="text-sm lg:text-base 2xl:text-xl font-normal bg-white py-2 rounded-md md:bg-transparent md:py-0">
              Log in
            </button>
            <button className="text-inherit md:text-white text-sm lg:text-base 2xl:text-xl font-normal py-2 md:py-[0.4rem] px-4 lg:py-2 lg:px-5 bg-white md:-bg-green rounded-md md:rounded-[10rem]">
              Sign up
            </button>
          </div>
        </div>
      </nav>
      <div className={`black-screen ${sidebar ? "show" : null}`}></div>
    </>
  );
}

export default Navbar;
