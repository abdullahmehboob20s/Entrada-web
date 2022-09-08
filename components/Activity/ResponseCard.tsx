import React from "react";
import { GoCommentDiscussion } from "react-icons/go";

function ResponseCard() {
  return (
    <div>
      <div className="flex items-center space-x-4 mb-3">
        <GoCommentDiscussion className="text-2xl -text-blue" />
        <h5 className="text-base -text-blue font-bold">
          Response from Host, Jul 2022
        </h5>
      </div>

      <p className="text-base font-normal leading-[1.7] -text-blue max-w-[40em]">
        Hello dear traveler! Thank you for letting us know about your experience
        in a secret river adventures tour.
      </p>
    </div>
  );
}

export default ResponseCard;