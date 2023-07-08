import React from "react";
interface RequestsProps {
  name: string;
  price: string;
  date: string;
}

const index: React.FC<RequestsProps> = ({ date, price, name }) => {
  return (
    <div className="flex w-full justify-between items-center py-4 border-b border-gray-200 cursor-pointer">
        <div className="flex">
      <img src="/assets/images/background-2.jpg " alt="" className="w-20 h-20 rounded-md"/>
      <div className="flex flex-col sm:px-2 lg:px-4">
        <h2 className="">{name}</h2>
        <p>{date}</p>
        <p>{price}</p>
      </div>
      </div>
      <img src="/assets/icons/right-light.svg" alt="" />
    </div>
  );
};

export default index;
