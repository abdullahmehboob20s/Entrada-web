import Link from "next/link";
import React from "react";
import FooterLocations from "./FooterLocations";
import FooterQuickLinks from "./FooterQuickLinks";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import FooterLinks from "./FooterLinks";

function Footer() {
  return (
    <div>
      <div className="container">
        <div className="mb-8">
          <FooterQuickLinks />
        </div>

        <div className="mb-8">
          <FooterLocations />
        </div>

        <div className="grid grid-cols-[1fr_1fr] 2xl:grid-cols-[1fr_minmax(1fr,648px)] justify-between gap-[200px] mb-100px">
          <FooterLinks />

          <div>
            <h4 className="text-lg 2xl:text-2xl font-medium -text-blue-300 mb-4 leading-[1]">
              Get In Touch
            </h4>

            <div className="mb-[40px] flex items-center space-x-6">
              <h1 className="text-[30px] 2xl:text-[40px] font-semibold -text-blue-300 leading-[1]">
                Let’s Talk
              </h1>
              <span className="-text-blue-300 text-3xl 2xl:text-5xl">
                <HiOutlineArrowNarrowRight />
              </span>
            </div>

            <form className="flex shadow-[0_16px_70px_-10px_rgba(0,97,92,.3)] mb-12">
              <div className="flex-1 relative">
                <span className="absolute top-[50%] left-[8%] translate-y-[-50%] text-2xl text-gray-400">
                  <HiOutlineMail />
                </span>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="text-base -text-blue font-normal border-none outline-none bg-white w-full h-full py-[26px] 2xl:py-[32px] px-6 pl-[18%]"
                />
              </div>
              <button
                type="submit"
                className="-bg-green text-white text-lg 2xl:text-2xl font-medium px-8"
              >
                Send Now!
              </button>
            </form>
          </div>
        </div>

        <div className="flex items-center justify-between border-b-2 border-[rgba(112,112,112,0.26)] pb-6">
          <p className="text-lg 2xl:text-2xl font-medium -text-blue-300">
            Privacy Policy
          </p>

          <div className="flex items-center space-x-[1em] text-base 2xl:text-2xl -text-blue-300 font-medium">
            <Link href="/">
              <a target="_blank">Linkedin</a>
            </Link>{" "}
            <span>/</span>{" "}
            <Link href="/">
              <a target="_blank">Facebook</a>
            </Link>{" "}
            <span>/</span>{" "}
            <Link href="/">
              <a target="_blank">Instagram</a>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-between mt-6">
          <p className="text-base -text-blue-300 font-normal">
            2019-2020 © Entrada
          </p>

          <img
            src="images/payment-methods.png"
            className="w-full max-w-[250px] 2xl:max-w-[294px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
