import React from "react";

export default function ActivityCard() {
  return (
    <div className="flex-1 rounded-full border-2 -border-green flex items-center space-x-4 border-l-0 shadow-[0_.1rem_10px_rgba(0,0,0,.3)]">
      <div className="w-14 h-14 rounded-full border-2 -border-green flex items-center justify-center ">
        <img src="images/hiking-icon.svg" className="w-[54%]" alt="" />
      </div>

      <div className="flex-1">
        <p className="text-sm text-black opacity-80 mb-1 leading-[1]">Hiking</p>
        <p className="text-xs text-black opacity-80 italic">3 Activities</p>
      </div>
    </div>
  );
}
