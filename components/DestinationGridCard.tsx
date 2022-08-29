import React from "react";
import DestinationCard from "./DestinationCard";

interface Props {
  images: Array<string>;
}

function DestinationGridCard(props: Props) {
  return (
    <div className="destination-grid grid grid-cols-4 grid-rows-[19vw_19vw] gap-8">
      <DestinationCard
        title="Vientam"
        subtitle="WaterFall"
        img="images/destination-img-1.png"
      />
      <DestinationCard
        title="Old Rain"
        subtitle="Mountain & Sea Views"
        img="images/destination-img-2.png"
      />
      <DestinationCard
        title="Greece"
        subtitle="The Aegean and Lonian Seas."
        img="images/destination-img-3.png"
      />
      <DestinationCard
        title="London"
        subtitle="City of Young Dreams"
        img="images/destination-img-4.png"
      />
      <DestinationCard
        title="Amsterdam"
        subtitle="City of Lake"
        img="images/destination-img-5.png"
      />
      <DestinationCard
        title="Paris"
        subtitle="Feel The Love"
        img="images/destination-img-6.png"
      />
    </div>
  );
}

export default DestinationGridCard;
