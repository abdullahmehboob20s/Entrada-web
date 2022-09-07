import React from "react";

interface Props {
  name: string;
  willGuideAbout: string;
  location: string;
}

function GuideCard(props: Props) {
  return (
    <div className="flex items-center space-x-4">
      <img src="images/guide-person.png" className="w-24" alt="" />
      <div>
        <h1 className="text-underline text-xl font-medium -text-blue-300 mb-2">
          {props.name}
        </h1>
        <p className="-text-blue text-base mb-1">{props.willGuideAbout}</p>
        <h5 className="-text-blue text-base font-bold">{props.location}</h5>
      </div>
    </div>
  );
}

export default GuideCard;