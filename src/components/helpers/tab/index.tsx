import React from "react";

interface TabProps {
  className?: string;
}
const tab = {
  Rides: "No upcoming rides",
  Book: "Book a ride now",
};

const index: React.FC<TabProps> = ({ className }) => {
  return (
    <div className="flex justify-between border border-gray-200 sm:p-2.5 md:p-5 items-center rounded-2xl">
      <div className="flex flex-col ">
        <h1 className="text-md font-semibold text-gray-600">{tab.Rides}</h1>
        <h3 className="text-gray-500">{tab.Book}</h3>
      </div>
      <div className="">
        <img src="/assets/icons/right.svg" alt="" />
      </div>
    </div>
  );
};

export default index;
