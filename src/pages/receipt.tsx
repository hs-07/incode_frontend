import React from "react";
import { Navbar, Button } from "@/components/common";
import { ReceiptBlock } from "@/components/helpers";

const FareBlocks = [
  { price: "₹200.00", name: "Base Fare" },
  { price: "₹50.00", name: "Late night charges" },
  { price: "₹30.00", name: "Toll charges" },
  { price: "₹20.00", name: "GST" },
];
const DetailBlocks = [
  { price: "Cash", name: "Mode of Payment" },
  { price: "01 July 2023", name: "Date" },
  { price: "23:00", name: "Time" },
];

const Reciept: React.FC = () => {
  return (
    <div className="flex justify-end w-screen h-screen ">
      <div className="flex sm:w-full md:w-1/2 lg:w-1/3 h-screen bg-white overflow-y-scroll scroll-smooth scrollbar-thin  scrollbar-track-rounded-full  scrollbar-thumb-rounded-full scrollbar-thumb-gray-300">
        <div className="flex w-full flex-col">
          <Navbar className="bg-white" />
          <div className="flex px-5 items-center pb-3">
            <a href="/details">
              <img src="/assets/icons/left.svg" alt="" />
            </a>
            <h1 className="text-2xl px-4">Receipt</h1>
          </div>
          <div className="flex justify-between mx-5 pb-3 border-b-2 border-[#A7E92F]">
            <h1 className="text-lg text-bold">Ride Total</h1>
            <h1 className="text-lg text-bold">₹300.00</h1>
          </div>
          <div className="flex justify-between mx-5 py-3 border-b-2 border-[#A7E92F]">
            <h1 className="text-xs text-gray-500 ">Ride Charge</h1>
            <h1 className="text-xs text-gray-500 ">₹300.00</h1>
          </div>
          <div className="mx-5 py-4 border-b-2 border-[#A7E92F]">
            {FareBlocks.map((item) => (
              <ReceiptBlock
                name={item.name}
                price={item.price}
                className=""
              />
            ))}
          </div>
          <div className="flex justify-between mx-5 py-3 border-b-2 border-[#A7E92F]">
            <h1 className="text-xs text-gray-800 text-bold">Subtotal</h1>
            <h1 className="text-xs text-gray-800 text-bold ">₹300.00</h1>
          </div>
          <div className="mx-5 py-4">
            {DetailBlocks.map((item) => (
              <ReceiptBlock
                name={item.name}
                price={item.price}
                className=""
              />
            ))}
          </div>
              <div className="flex justify-center p-5">
                <Button name="Download PDF" className="bg-gray-200"/>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Reciept;
