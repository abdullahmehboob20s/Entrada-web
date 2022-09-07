import Guides from "layouts/Destination/Guides";
import Hero from "layouts/Destination/Hero";
import ThingsToDo from "layouts/Destination/ThingsToDo";
import Welcome from "layouts/Destination/Welcome";
import Footer from "layouts/Footer";
import Navbar from "layouts/Navbar";
import Partners from "layouts/Partners";
import Questions from "layouts/Questions";

function Destination() {
  return (
    <div>
      <div className="relative mb-100px">
        <img
          src="images/Destination-banner.png"
          className="absolute top-0 left-0 w-full h-full -z-20 object-cover"
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[rgba(0,0,0,.42)]"></div>

        <Navbar
          wrapperClassName="z-10 bg-gradient-to-b from-[rgba(0,0,0,.7)] to-transparent"
          textColor="text-white"
        />

        <div>
          <Hero />
        </div>
      </div>
      <div className="mb-100px">
        <Welcome />
      </div>
      <div className="mb-100px">
        <ThingsToDo />
      </div>
      <div className="mb-100px">
        <Guides />
      </div>
      <div className="mb-16 md:mb-150px ">
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
