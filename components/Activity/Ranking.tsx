import React from "react";
import { FaStar } from "react-icons/fa";

function Ranking() {
  return (
    <div className="grid grid-cols-[14rem_1fr] gap-4">
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-[.2rem]">
          <FaStar color="#ED8A19" className="text-base" />
          <FaStar color="#ED8A19" className="text-base" />
          <FaStar color="#ED8A19" className="text-base" />
          <FaStar color="#ED8A19" className="text-base" />
          <FaStar color="#ED8A19" className="text-base" />
        </div>
        <p className="text-base -text-gray">124 Reviews</p>
      </div>
      <div>
        <p className="text-base -text-gray">Playa del Carmen, Mexico</p>
      </div>
    </div>
  );
}

export default Ranking;
