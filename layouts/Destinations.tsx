import Bar from "components/Bar";
import DestinationCard from "components/DestinationCard";
import React from "react";

function Destinations() {
  return (
    <div>
      <div className="container">
        <div className="mb-12 2xl:mb-16">
          <Bar
            title="Top Destinations"
            subtitle="Sost Brilliant reasons Entrada should be your one-stop-shop!"
          />
        </div>

        <div className="grid grid-cols-4 grid-rows-[19vw_19vw] gap-8">
          <DestinationCard
            title="Vientam"
            subtitle="WaterFall"
            img="images/destination-img-1.png"
          />
          <DestinationCard
            title="Old Rain"
            subtitle="Mountain & Sea Views"
            img="images/destination-img-2.png"
            className="col-start-1 col-end-2 row-start-2 row-end-3"
          />
          <DestinationCard
            title="Greece"
            subtitle="The Aegean and Lonian Seas."
            img="images/destination-img-3.png"
            className="col-start-2 col-end-3 row-start-1 row-end-3"
          />
          <DestinationCard
            title="London"
            subtitle="City of Young Dreams"
            img="images/destination-img-4.png"
            className="col-start-3 col-end-[-1] row-start-1 row-end-2"
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
      </div>
    </div>
  );
}

export default Destinations;
