import React from "react";
import { BsCalendar3 } from "react-icons/bs";
import CheckBoxWithTitle from "./CheckBoxWithTitle";
import TwoThumbs from "./TwoThumbs";

function TravelingOptions() {
  return (
    <div className="TravelingOptions border-[1px] border-[#BFBFBF] rounded">
      <div className="-bg-green py-4 px-6 mb-2">
        <h2 className="text-xl -text-yellow-200 mb-4 font-bold">
          When are you traveling?
        </h2>

        <div className="py-2 px-4 rounded-md bg-white border-[1px] border-[#707070] flex items-center space-x-3">
          <BsCalendar3 className="text-black opacity-70 text-xl" />
          <p className="text-lg text-black opacity-80 ">Select Dates </p>
        </div>
      </div>

      <div className="py-2 px-5">
        <div className="cards">
          <h1 className="card-title">Popular</h1>

          <div className="space-y-2">
            <CheckBoxWithTitle
              id="good"
              type="checkbox"
              title="Good for avoiding crowds"
              info={true}
            />
            <CheckBoxWithTitle
              id="safety"
              type="checkbox"
              title="Taking safety measures"
              info={true}
            />
            <CheckBoxWithTitle
              id="virtual"
              type="checkbox"
              title="Virtual experiences"
              info={true}
            />
            <CheckBoxWithTitle
              id="kid"
              type="checkbox"
              title="Kid friendly"
              info={true}
            />
          </div>
        </div>
        <div className="cards">
          <h1 className="card-title">Price</h1>
          <div className="mb-2">
            <TwoThumbs rtl={false} />
          </div>
        </div>
        <div className="cards">
          <h1 className="card-title">Duration</h1>

          <div className="space-y-2">
            <CheckBoxWithTitle
              id="Up to 1 hour"
              type="checkbox"
              title="Up to 1 hour"
              info={false}
            />
            <CheckBoxWithTitle
              id="1 to 4 hours"
              type="checkbox"
              title="1 to 4 hours"
              info={false}
            />
            <CheckBoxWithTitle
              id="4 hours to 1 day"
              type="checkbox"
              title="4 hours to 1 day"
              info={false}
            />
            <CheckBoxWithTitle
              id="1 to 3 days"
              type="checkbox"
              title="1 to 3 days"
              info={false}
            />
            <CheckBoxWithTitle
              id="3+ days"
              type="checkbox"
              title="3+ days"
              info={false}
            />
          </div>
        </div>
        <div className="cards">
          <h1 className="card-title">Time of the Day</h1>

          <div className="space-y-2">
            <CheckBoxWithTitle
              id="6am—12pm"
              type="checkbox"
              title="6am—12pm"
              info={false}
            />
            <CheckBoxWithTitle
              id="12pm—5pm"
              type="checkbox"
              title="12pm—5pm"
              info={false}
            />
            <CheckBoxWithTitle
              id="5pm—12am"
              type="checkbox"
              title="5pm—12am"
              info={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelingOptions;
