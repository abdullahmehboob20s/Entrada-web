import Place from "layouts/Activity/Place";
import Navigator from "components/Navigator";
import Guides from "layouts/Destination/Guides";
import Hero from "layouts/Destination/Hero";
import ThingsToDo from "layouts/Destination/ThingsToDo";
import Welcome from "layouts/Destination/Welcome";
import Footer from "layouts/Footer";
import Navbar from "layouts/Navbar";
import Partners from "layouts/Partners";
import Questions from "layouts/Questions";
import Image from "next/image";

function Activity() {
  return (
    <div>
      <div className="mb-10">
        <Navbar wrapperClassName="shadow-[0_0_10px_rgba(0,0,0,.3)]" />
      </div>
      <div className="mb-8">
        <Navigator title="Home / Things to do in Tirana / Things to do in Petrela" />
      </div>
      <div className="mb-7">
        <div className="container">
          <h1 className="text-4xl font-bold -text-blue-300">
            A secret river adventures tour. Explore the nature wonders of the
            Riviera Maya
          </h1>
        </div>
      </div>
      <div className="mb-100px">
        <Place />
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

export default Activity;
