import BestSeller from "layouts/BestSeller";
import Category from "layouts/Category";
import Destinations from "layouts/Destinations";
import Hero from "layouts/Hero";
import Navbar from "layouts/Navbar";
import TourGuide from "layouts/TourGuide";
import Trending from "layouts/Trending";
import React from "react";

function index() {
  return (
    <div>
      <Navbar />
      <div className="mb-150px">
        <Hero />
      </div>
      <div className="mb-100px">
        <Category />
      </div>
      <div className="mb-100px">
        <Trending />
      </div>
      <div className="mb-100px">
        <Destinations />
      </div>
      <div className="mb-100px">
        <BestSeller />
      </div>
      <div className="mb-100px">
        <TourGuide />
      </div>
    </div>
  );
}

export default index;
