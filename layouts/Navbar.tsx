import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="container py-6 2xl:py-10 flex items-center justify-between">
      <div className="flex items-center space-x-[120px]">
        <h1 className="text-3xl 2xl:text-[40px] font-semibold ">Entrada</h1>

        <div className="flex items-center space-x-10">
          <Link href="/">
            <a className="text-base 2xl:text-xl font-medium">Destination</a>
          </Link>
          <Link href="/">
            <a className="text-base 2xl:text-xl font-medium">Bookings</a>
          </Link>
          <Link href="/">
            <a className="text-base 2xl:text-xl font-medium">Activities</a>
          </Link>
        </div>
      </div>
      <div className="flex items-center space-x-[32px]">
        <button className="text-lg 2xl:text-xl font-normal">Log in</button>
        <button className="text-white text-base 2xl:text-xl font-normal py-2 px-5 -bg-green rounded-[10rem]">
          Sign up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
