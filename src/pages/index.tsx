import React, { useState } from "react";
import { ImageSlider, Navbar, Input, Button } from "@/components/common";
import { Map, Block } from "@/components/helpers";

const index: React.FC = () => {
  const [value1, setValue1 ] = useState("");
  const [value2, setValue2 ] = useState("");
  const [value3, setValue3 ] = useState("");
  const [value4, setValue4] = useState("");

  const handleChange = (name:string, value : string) => {
    if (name === 'input1') setValue1(value);
    if (name === 'input2') setValue2(value);
    if (name === 'input3') setValue3(value);
    if (name === 'input4') setValue4(value);
  };

  return (
    <div className="flex w-screen justify-end">
      <div className="sm:w-full md:w-1/2 lg:w-1/3 sm:h-screen bg-white">
        <div className="lg:h-2/5 sm:h-1/2 bg-map bg-contain -mb-2">
          <Navbar />
        </div>
        <div className="lg:h-3/5 sm:h-1/2 bg-white rounded-t-2xl border shadow-hs flex flex-col justify-between ">
          <div className="overflow-y-scroll scroll-smooth scrollbar-thin  scrollbar-track-rounded-full  scrollbar-thumb-rounded-full scrollbar-thumb-gray-300">

          <ImageSlider />
          <div className="pt-4">
            <Input
              placeholder="Pickup address"
              value ={value1}
              src="/assets/icons/blueRing.svg"
              className="lg:px-8 sm:px-3 lg:py-2"
              onChange={handleChange}
              name="input1"
              id="1"
            />
            <Input
              placeholder="Destination"
              src="/assets/icons/greenRing.svg"
              className="lg:px-8 sm:px-3 lg:py-2"
              value = {value2}
              onChange={handleChange}
              name="input2"
              id="2"
            />
            {value2 !== "" && (
              <div className="block">
                <Block />
              </div>
            )}
            <Input
              placeholder="Offer a fare"
              value ={value3}
              src="/assets/icons/ruppee.svg"
              name="input3"
              className="lg:pr-8 lg:pl-9 sm:pl-5 sm:pr-3 lg:py-2"
              onChange={handleChange}
              id="3"
            />
            <Input
              placeholder="Options and comments"
              name="input4"
              value = {value4}
              src="/assets/icons/Chat.svg"
              className="lg:px-8 sm:px-3 lg:py-2"
              onChange={handleChange}
              id="4"
            />
          </div>

        
        </div>
        <div className="lg:px-8 sm:px-3 mt-2 bg-white">
            <Button name="Find a driver" className="bg-[#A7E92F]"/>
          </div>
      </div>
            
          </div>
          
    </div>
  );
};

export default index;
