import React from "react";
import { FaRegComments } from "react-icons/fa";

interface Props {
  title: string;
}

function Navigator(props: Props) {
  return (
    <div className="container flex items-center justify-between">
      <div className="text-base text-black opacity-80">{props.title}</div>
      <div className="flex items-center space-x-3">
        <FaRegComments className="text-black opacity-60 text-xl" />
        <p className="text-base text-black opacity-80 leading-[1]">
          Need Help?
        </p>
      </div>
    </div>
  );
}

export default Navigator;
