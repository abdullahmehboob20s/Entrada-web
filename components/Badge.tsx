import React from "react";

interface Position {
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
}

interface Props {
  title: string;
  textColor?: string;
  bgColor?: string;
  position?: Position;
}

function Badge(props: Props) {
  const {
    bgColor = "#FEF2DE",
    textColor = "#F5A623",
    position = { top: "top-5 2xl:top-8", left: "right-5 2xl:right-8" },
  } = props;

  return (
    <div
      className={`absolute px-4 py-1 text-base 2xl:text-lg font-medium text-center rounded-[4rem] ${bgColor} ${textColor} ${position.top} ${position.left} ${position.right} ${position.bottom}`}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {props.title}
    </div>
  );
}

export default Badge;
