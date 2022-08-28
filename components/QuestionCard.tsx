import React from "react";

interface Props {
  icon: string;
  color: string;
  title: string;
  subtitle: string;
  email: string;
  phoneNumber: string;
}

function QuestionCard(props: Props) {
  return (
    <div
      className="p-[60px] 2xl:p-[72px] text-center flex flex-col items-center rounded-[12px]"
      style={{ backgroundColor: props.color }}
    >
      <div className="rounded-full bg-white w-[80px] h-[80px] 2xl:w-[104px] 2xl:h-[104px] mb-10 2xl:mb-14 flex justify-center items-center">
        <img src={props.icon} className="w-[40%]" alt="" />
      </div>

      <h1 className="text-center text-[26px] 2xl:text-[32px] text-white mb-6 font-medium">
        {props.title}
      </h1>

      <p className="text-center text-lg 2xl:text-2xl opacity-[0.8] leading-[1.4] font-normal text-white w-[16em] mb-12">
        {props.subtitle}
      </p>

      <div>
        <h4 className="text-center text-lg 2xl:text-2xl text-white mb-2 font-medium leading-[1]">
          {props.email}
        </h4>
        <h4 className="text-center text-lg 2xl:text-2xl text-white font-medium">
          {props.phoneNumber}
        </h4>
      </div>
    </div>
  );
}

export default QuestionCard;
