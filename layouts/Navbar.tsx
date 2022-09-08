import OutsideClickDetector from "hooks/OutsideClickDetector";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { IoCloseSharp, IoMenu } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { useRouter } from "next/router";

interface Props {
  wrapperClassName?: string;
  textColor?: "-text-black" | "text-white";
}

function Navbar({ wrapperClassName, textColor = "-text-black" }: Props) {
  const [sidebar, setSidebar] = useState(false);
  const sidebarRef = OutsideClickDetector(() => setSidebar(false));
  const router = useRouter();
  const inputElement = useRef();

  const sendTo = (e: any, href: string) => {
    router.push(href);
  };

  return (
    <>
      <div className={wrapperClassName}>
        <nav className="container py-4 sm:py-6 2xl:py-10 flex items-center justify-between space-x-[50px] lg:space-x-[120px]">
          <div className="flex items-center">
            <Link href="/">
              <a className={`text-2xl md:text-2xl font-semibold ${textColor}`}>
                Entrada
              </a>
            </Link>
          </div>

          <button
            className={`flex md:hidden text-2xl ${
              textColor == "-text-black" ? "-text-blue-300" : textColor
            } `}
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
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:space-x-10 flex-1">
              <Link href="/destination">
                <a
                  className={`w-fit text-base md:text-sm font-medium text-white md:${textColor}`}
                >
                  Destination
                </a>
              </Link>
              <Link href="/">
                <a
                  className={`w-fit text-base md:text-sm font-medium text-white md:${textColor}`}
                >
                  Bookings
                </a>
              </Link>
              <Link href="/activity">
                <a
                  className={`w-fit text-base md:text-sm font-medium text-white md:${textColor}`}
                >
                  Activities
                </a>
              </Link>

              <div className="flex-1 flex items-center justify-center">
                <div className="w-[70%] relative">
                  <input
                    type="text"
                    className={`w-full h-full py-1 px-2 rounded-md text-base md:text-sm outline-none border-[1px] border-[#E5E5E5] ${textColor}`}
                    placeholder="Search for “Shengjergj” or “Petrela”"
                    onClick={(e) => sendTo(e, "/search")}
                    // ref={inputElement}
                  />

                  <GoSearch
                    className={`${textColor} text-base absolute top-1/2 -translate-y-1/2 right-3 pointer-events-none`}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:items-center md:space-x-[24px] lg:space-x-[32px]">
              <button
                className={`text-sm 2xl:text-xl font-normal bg-white py-2 rounded-md md:bg-transparent md:py-0 text-black md:${textColor}`}
              >
                Log in
              </button>
              <button className="text-inherit md:text-white text-sm 2xl:text-xl font-normal py-2 md:py-[0.4rem] px-4 lg:py-[.3rem] lg:px-4 bg-white md:-bg-green rounded-md md:rounded-[10rem]">
                Sign up
              </button>
            </div>
          </div>
        </nav>
      </div>
      <div className={`black-screen z-[100] ${sidebar ? "show" : null}`}></div>
    </>
  );
}

export default Navbar;
