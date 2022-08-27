import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface Props {
  title: string;
  subtitle: string;
}

function Bar(props: Props) {
  return (
    <header className="flex items-center justify-between">
      <div>
        <h1 className="text-[30px] 2xl:text-[40px] font-bold mb-3">
          {props.title}
        </h1>
        <p className="text-lg 2xl:text-2xl -text-blue font-normal">
          {props.subtitle}
        </p>
      </div>
      <div className="flex space-x-4 items-center">
        <button className="w-[50px] h-[50px] 2xl:w-[72px] 2xl:h-[72px] rounded-full border-2 -border-blue flex items-center justify-center text-2xl 2xl:text-3xl -text-blue">
          <MdKeyboardArrowLeft />
        </button>
        <button className="w-[50px] h-[50px] 2xl:w-[72px] 2xl:h-[72px] rounded-full border-2 -border-green flex items-center justify-center text-2xl 2xl:text-3xl text-white -bg-green">
          <MdKeyboardArrowRight />
        </button>
      </div>
    </header>
  );
}

export default Bar;
