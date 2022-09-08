import ActivityCard from "components/ActivityCard";
import Navigator from "components/Navigator";
import Footer from "layouts/Footer";
import Navbar from "layouts/Navbar";
import Partners from "layouts/Partners";
import Questions from "layouts/Questions";
import TravelingDetails from "layouts/TravelingDetails";
import React from "react";

function Search() {
  return (
    <div>
      <div className="mb-8">
        <Navbar />
      </div>
      <div className="mb-6">
        <Navigator title="Home / Things to do in Tirana / Things to do in Petrela" />
      </div>
      <div className="mb-7">
        <div className="container">
          <h1 className="text-4xl font-bold text-black">Petrela Tours</h1>
        </div>
      </div>

      <div className="mb-16">
        <div className="container">
          <div className="flex items-center justify-center flex-wrap -mx-2 xl:m-0 xl:justify-between xl:space-x-8">
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
          </div>
        </div>
      </div>

      <div className="mb-100px">
        <TravelingDetails />
      </div>

      <div className="mb-16 md:mb-150px">
        <Partners />
      </div>
      <div className="mb-150px">
        <Questions />
      </div>
      <div className="mb-8">
        <Footer />
      </div>
    </div>
  );
}

export default Search;
