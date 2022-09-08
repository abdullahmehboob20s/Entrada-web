import React from "react";
import { MdDone } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import PlaceReviews from "../../components/Activity/PlaceReviews";
import ReservationForm from "components/Activity/ReservationForm";

interface Item_Interface {
  title: string;
  included: boolean;
}

const Item = (props: Item_Interface) => {
  return (
    <div className="flex items-center space-x-2">
      {props.included ? (
        <MdDone className="text-lg -text-blue" />
      ) : (
        <IoMdClose className="text-lg -text-blue" />
      )}
      <p className="text-base font-normal leading-[1.7] -text-blue">
        {props.title}
      </p>
    </div>
  );
};

function PlaceDetails() {
  return (
    <div>
      <div className="container grid grid-cols-[1fr_.5fr] gap-10">
        <div>
          <div className="mb-100px">
            <div className="pb-12 mb-12 border-b-[1px] -border-blue">
              <h1 className="text-2xl font-bold -text-blue mb-4">Overview</h1>

              <p className="text-base font-normal leading-[1.7] -text-blue">
                Explore the Rio Secreto Nature Reserve on this guided
                multi-activity tour. Hike, bike, swim and rappel the massive
                cavern in groups of 10, and enjoy an interactive experience
                inside the Room of Peace. All gear plus a buffet lunch provided.
                Choose pickup service from your Cancun or Riviera Maya hotel, or
                meet your guide at Rio Secreto directly. Guided visit to the Rio
                Secreto Nature Reserve including Room of Peace Hike, bike,
                rappel, swim and snorkel with all equipment provided Lockers are
                available to store personal belongings Includes a buffet lunch
                with water Pickup service from Cancun and Riviera Maya hotels
              </p>
            </div>

            <div className="pb-12 mb-12 border-b-[1px] -border-blue">
              <h1 className="text-2xl font-bold -text-blue mb-4">Overview</h1>

              <div className="grid grid-cols-3">
                <div>
                  <Item included={true} title="Food" />
                  <Item included={true} title="Transportation" />
                  <Item included={true} title="Guide" />
                  <Item included={true} title="Pictures" />
                </div>
                <div>
                  <Item included={false} title="Drinks" />
                </div>
              </div>
            </div>

            <div className="pb-12 mb-12 border-b-[1px] -border-blue">
              <div className="mb-8">
                <h1 className="text-2xl font-bold -text-blue mb-4">
                  Meeting And Pickup
                </h1>
                <p className="text-base font-normal leading-[1.7] -text-blue">
                  You can head directly to the meeting point, or request pickup
                </p>
              </div>
              <div className="mb-8">
                <h1 className="text-2xl font-bold -text-blue mb-4">
                  Meeting point
                </h1>
                <p className="text-base font-normal leading-[1.7] -text-blue">
                  You can head directly to the meeting point, or request pickup
                </p>
              </div>
              <div>
                <h1 className="text-2xl font-bold -text-blue mb-4">
                  More Information
                </h1>
                <p className="text-base font-normal leading-[1.7] -text-blue">
                  You can head directly to the meeting point, or request pickup
                </p>
              </div>
            </div>

            <div className="pb-12 mb-12 border-b-[1px] -border-blue">
              <h1 className="text-2xl font-bold -text-blue mb-4">
                What To Expect
              </h1>
              <p className="text-base font-normal leading-[1.7] -text-blue">
                Explore the Rio Secreto Nature Reserve on this guided
                multi-activity tour. Hike, bike, swim and rappel the massive
                cavern in groups of 10, and enjoy an interactive experience
                inside the Room of Peace. All gear plus a buffet lunch provided.
                Choose pickup service from your Cancun or Riviera Maya hotel, or
                meet your guide at Rio Secreto directly. Guided visit to the Rio
                Secreto Nature Reserve including Room of Peace Hike, bike,
                rappel, swim and snorkel with all equipment provided Lockers are
                available to store personal belongings Includes a buffet lunch
                with water Pickup service from Cancun and Riviera Maya hotels
              </p>
            </div>

            <div>
              <h1 className="text-2xl font-bold -text-blue mb-4">
                Cancellation Policy
              </h1>
              <p className="text-base font-normal leading-[1.7] -text-blue">
                Explore the Rio Secreto Nature Reserve on this guided
                multi-activity tour. Hike, bike, swim and rappel the massive
                cavern in groups of 10, and enjoy an interactive experience
                inside the Room of Peace. All gear plus a buffet lunch provided.
                Choose pickup service from your Cancun or Riviera Maya hotel, or
                meet your guide at Rio Secreto directly. Guided visit to the Rio
                Secreto Nature Reserve including Room of Peace Hike, bike,
                rappel, swim and snorkel with all equipment provided Lockers are
                available to store personal belongings Includes a buffet lunch
                with water Pickup service from Cancun and Riviera Maya hotels
              </p>
            </div>
          </div>

          <PlaceReviews />
        </div>

        <div>
          <ReservationForm />
        </div>
      </div>
    </div>
  );
}

export default PlaceDetails;
