import React from "react";

function BookNow() {
  return (
    <div>
      <div className="container">
        <div className="rounded-[12px] -bg-green p-[72px] text-center relative z-[1]">
          <img
            src="images/book-now-bg.png"
            alt=""
            className="absolute top-0 left-0 w-full h-full z-[-1] pointer-events-none select-none object-cover"
          />
          <h1 className="text-center text-[40px] 2xl:text-[56px] text-white font-medium mb-9">
            Tour the World from Your Couch with <br /> #ExperienceLive!
          </h1>

          <h2 className="text-[20px] 2xl:text-[32px] text-white text-center font-normal mb-12">
            To kickstart your digital adventures with MakeMyTrip,
          </h2>

          <button className="-text-green bg-white rounded-full py-3 px-6 2xl:px-8 2xl:py-5 text-lg 2xl:text-2xl">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookNow;
