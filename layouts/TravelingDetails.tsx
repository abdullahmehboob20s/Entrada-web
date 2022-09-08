import TravelingOptions from "components/TravelingOptions";
import React from "react";
import TravelingAreaCard from "./TravelingAreaCard";

function TravelingDetails() {
  return (
    <div className="container grid grid-cols-[1fr] xl:grid-cols-[.4fr_1fr] gap-7">
      <TravelingOptions />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 gap-5">
        <TravelingAreaCard />
        <TravelingAreaCard />
        <TravelingAreaCard />
        <TravelingAreaCard />
      </div>
    </div>
  );
}

export default TravelingDetails;
