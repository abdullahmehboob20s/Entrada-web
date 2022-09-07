import TravelingOptions from "components/TravelingOptions";
import React from "react";
import TravelingAreaCard from "./TravelingAreaCard";

function TravelingDetails() {
  return (
    <div className="container grid grid-cols-[.4fr_1fr] gap-7">
      <TravelingOptions />
      <div className="grid gap-5">
        <TravelingAreaCard />
        <TravelingAreaCard />
        <TravelingAreaCard />
        <TravelingAreaCard />
      </div>
    </div>
  );
}

export default TravelingDetails;
