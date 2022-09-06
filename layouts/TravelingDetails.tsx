import TravelingOptions from "components/TravelingOptions";
import React from "react";

function TravelingDetails() {
  return (
    <div className="container grid grid-cols-[.4fr_1fr] gap-7">
      <TravelingOptions />
      <div className="border-2"></div>
    </div>
  );
}

export default TravelingDetails;
