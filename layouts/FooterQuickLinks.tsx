import Link from "next/link";
import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

function FooterQuickLinks() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-5">
        <div className="flex items-center space-x-5">
          <span className="text-2xl 2xl:text-4xl -text-blue-300 flex">
            <AiOutlinePlusCircle />
          </span>
          <h1 className="text-2xl 2xl:text-[32px] font-medium -text-blue-300 uppercase">
            QUICK LINKS
          </h1>
        </div>
        <p className="text-base 2xl:text-2xl font-normal -text-blue">
          Explore more categories
        </p>
      </div>

      <div>
        <div className="text-base 2xl:text-2xl font-normal flex items-center space-x-[1em]">
          <Link href="tel:0123-456-324-54">
            <a target="_blank">0123-456-324-54</a>
          </Link>{" "}
          <span>|</span>
          <Link href="mailto:hello@entrada.com">
            <a target="_blank">hello@entrada.com</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FooterQuickLinks;
