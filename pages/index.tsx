import Category from "layouts/Category";
import Hero from "layouts/Hero";
import Navbar from "layouts/Navbar";
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
    </div>
  );
}

export default index;
