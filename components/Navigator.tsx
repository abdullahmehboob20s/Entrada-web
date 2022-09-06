import React from "react";
import { FaRegComments } from "react-icons/fa";

function Navigator() {
  return (
    <div className="container flex items-center justify-between">
      <div className="text-base text-black opacity-80">
        Home / Things to do in Tirana / Things to do in Petrela
      </div>
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
