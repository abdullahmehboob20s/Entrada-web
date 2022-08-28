import Bar from "components/Bar";
import BestSellerCard from "components/BestSellerCard";
import React from "react";

function BestSeller() {
  return (
    <div>
      <div className="container">
        <div className="mb-12 2xl:mb-16">
          <Bar
            title="Best Seller"
            subtitle="Sost Brilliant reasons Entrada should be your one-stop-shop!"
          />
        </div>

        <div className="grid grid-cols-3 gap-[32px]">
          <BestSellerCard
            title="Train Tour Skyline"
            subtitle="Check Out Daily Deals and Promotion on Hotels. Easy & Fast Booking"
            img="images/destination-img-2.png"
          />
          <BestSellerCard
            title="Sea Nature Views"
            subtitle="Check Out Daily Deals and Promotion on Hotels. Easy & Fast Booking"
            img="images/destination-img-2.png"
          />
          <BestSellerCard
            title="Trilogy Market Ptr"
            subtitle="Check Out Daily Deals and Promotion on Hotels. Easy & Fast Booking"
            img="images/destination-img-2.png"
          />
        </div>
      </div>
    </div>
  );
}

export default BestSeller;