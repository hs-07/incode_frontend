import React from "react";
import { Heart } from "@/components/common";

const index: React.FC = () => {
  return (
    <div className="flex justify-between py-3 mx-5 px-2 border rounded-b-xl">
      <div className="flex items-center">
        <img src="/assets/icons/user.svg" alt="" className="w-8 mr-2" />
        <h1 className="">Golu</h1>
      </div>
      <div className="flex items-center">
        <Heart />
        <a href="savedDrivers">
        <img src="/assets/icons/right-light.svg" alt="" className="pl-5" />
        </a>
      </div>
    </div>
  );
};

export default index;
