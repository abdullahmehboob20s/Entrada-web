import Bar from "components/Bar";
import BestSellerCard from "components/BestSellerCard";
import React from "react";

const CheckAll = () => {
  return (
    <div>
      <button className="-bg-green rounded-full text-white py-2 px-4 xl:py-3 xl:px-6 2xl:py-6 2xl:px-10 text-xs sm:text-sm xl:text-base 2xl:text-2xl font-normal">
        Check All
      </button>
    </div>
  );
};

function BestSeller() {
  return (
    <div>
      <div className="container">
        <div className="mb-8 md:mb-12 2xl:mb-16">
          <Bar
            title="Best Seller"
            subtitle="Sost Brilliant reasons Entrada should be your one-stop-shop!"
            showPrevAndNextButtons={false}
          >
            <CheckAll />
          </Bar>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-[32px]">
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
