import Footer from "layouts/Footer";
import Navbar from "layouts/Navbar";
import Partners from "layouts/Partners";
import Questions from "layouts/Questions";
import React from "react";

function Destination() {
  return (
    <div>
      <Navbar wrapperClassName="absolute top-0 left-0 w-full" />
      <div className="min-h-screen bg-red-100 flex flex-col justify-center">
        <div className="container">
          <div>
            <h1 className="text-9xl font-bold text-white">Petrela</h1>
          </div>
        </div>
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

export default Destination;
