import React from "react";
import { ImageSlider, Navbar, Input, Button } from "@/components/common";
import { Map } from "@/components/helpers";

const inputs = [
  { placeholder: "Pickup address", src: "/assets/icons/blueRing.svg", className: "lg:px-8 sm:px-3" },
  { placeholder: "Destination",src: "/assets/icons/greenRing.svg", className: "lg:px-8 sm:px-3"},
  { placeholder: "Offer a fare", src: "/assets/icons/ruppee.svg", className: "lg:pr-8 lg:pl-9 sm:pl-5 sm:pr-3" },
  { placeholder: "Options and comments", src: "/assets/icons/Chat.svg", className: "lg:px-8 sm:px-3" },
];

const index: React.FC = () => {
  return (
    <div className="flex w-screen justify-end">
      <div className="sm:w-full md:w-1/2 lg:w-1/3 sm:h-screen bg-white">
        <div className="lg:h-2/5 sm:h-1/2 bg-map bg-contain -mb-2">
          <Navbar />
        </div>
        <div className="lg:h-3/5 sm:h-1/2 bg-white rounded-t-2xl border shadow-hs flex flex-col justify-around">
          <ImageSlider />
          <div className="">
            {inputs.map((input) => (
              <Input placeholder={input.placeholder} src={input.src} className={input.className}/>
            ))}
          </div>
          <div className="lg:px-8 sm:px-3">
              <Button name="Find a driver"/>
              </div>
        </div>
      </div>
    </div>
  );
};

export default index;
