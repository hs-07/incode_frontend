import React from "react";
import { ImageSlider, Navbar } from "@/components/common";
import { Map } from "@/components/helpers";

const index: React.FC = () => {
  return (
    <div className="flex w-screen justify-end">
      <div className="sm:w-full md:w-1/2 lg:w-1/3 h-screen bg-white">
        <div className="lg:h-2/5 sm:1/2">
        <Navbar />
        </div>
        <div className="lg:h-3/5 sm:h-1/2 bg-white border rounded-t-2xl">
    
        <ImageSlider />
        </div>
      </div>
    </div>
  );
};

export default index;
