import Link from "next/link";
import React from "react";

function FooterLinks() {
  return (
    <div className="grid grid-cols-[1fr_1fr_auto]">
      <div>
        <h2 className="text-base xl:text-lg 2xl:text-2xl font-medium -text-blue-300 mb-6 2xl:mb-8">
          Services
        </h2>

        <div className="space-y-4">
          <Link href="/">
            <a className="block w-fit -text-blue text-xs xl:text-sm 2xl:text-base font-normal">
              Budget Tours
            </a>
          </Link>
          <Link href="/">
            <a className="block w-fit -text-blue text-xs xl:text-sm 2xl:text-base font-normal">
              Expert Insight
            </a>
          </Link>
          <Link href="/">
            <a className="block w-fit -text-blue text-xs xl:text-sm 2xl:text-base font-normal">
              Independent
            </a>
          </Link>
          <Link href="/">
            <a className="block w-fit -text-blue text-xs xl:text-sm 2xl:text-base font-normal">
              Luxury Tours
            </a>
          </Link>
          <Link href="/">
            <a className="block w-fit -text-blue text-xs xl:text-sm 2xl:text-base font-normal">
              Safety Tips
            </a>
          </Link>
          <Link href="/">
            <a className="block w-fit -text-blue text-xs xl:text-sm 2xl:text-base font-normal">
              Tips n Tricks
            </a>
          </Link>
        </div>
      </div>
      <div>
        <h2 className="text-base xl:text-lg 2xl:text-2xl font-medium -text-blue-300 mb-6 2xl:mb-8">
          Adventures
        </h2>

        <div className="space-y-4">
          <Link href="/">
            <a className="block w-fit -text-blue text-xs xl:text-sm 2xl:text-base font-normal">
              Beach Activity
            </a>
          </Link>
          <Link href="/">
            <a className="block w-fit -text-blue text-xs xl:text-sm 2xl:text-base font-normal">
              Bungee Jump
            </a>
          </Link>
          <Link href="/">
            <a className="block w-fit -text-blue text-xs xl:text-sm 2xl:text-base font-normal">
              City Tour
            </a>
          </Link>
          <Link href="/">
            <a className="block w-fit -text-blue text-xs xl:text-sm 2xl:text-base font-normal">
              Hiking Trips
            </a>
          </Link>
          <Link href="/">
            <a className="block w-fit -text-blue text-xs xl:text-sm 2xl:text-base font-normal">
              Jungle Safari
            </a>
          </Link>
          <Link href="/">
            <a className="block w-fit -text-blue text-xs xl:text-sm 2xl:text-base font-normal">
              Night City Walk
            </a>
          </Link>
        </div>
      </div>
      <div>
        <h2 className="text-base xl:text-lg 2xl:text-2xl font-medium -text-blue-300 mb-6 2xl:mb-8">
          Country
        </h2>

        <div className="space-y-4">
          <Link href="/">
            <a className="block w-fit -text-blue text-xs xl:text-sm 2xl:text-base font-normal">
              USA
            </a>
          </Link>
          <Link href="/">
            <a className="block w-fit -text-blue text-xs xl:text-sm 2xl:text-base font-normal">
              Australia
            </a>
          </Link>
          <Link href="/">
            <a className="block w-fit -text-blue text-xs xl:text-sm 2xl:text-base font-normal">
              South Africa
            </a>
          </Link>
          <Link href="/">
            <a className="block w-fit -text-blue text-xs xl:text-sm 2xl:text-base font-normal">
              West Indies
            </a>
          </Link>
          <Link href="/">
            <a className="block w-fit -text-blue text-xs xl:text-sm 2xl:text-base font-normal">
              New Zealand
            </a>
          </Link>
          <Link href="/">
            <a className="block w-fit -text-blue text-xs xl:text-sm 2xl:text-base font-normal">
              Srilanka
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FooterLinks;
