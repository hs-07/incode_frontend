import React from "react";
import { Navbar } from "@/components/common";
import { DetailBlock, Favourite, Labels } from "@/components/helpers";

const detailsBlock = {
  date: "01 July 2023, 23:00",
  source: "Dummy Address",
  destination: "JSSATE, Noida",
  price: "300.00, Cash",
};
const labels =[
  {src:'/assets/icons/ruppee.svg', name: 'Receipt', url:'/receipt'},
  {src:'/assets/icons/Shield_Check.svg', name: 'Report a safety issue', url:''},
  {src:'/assets/icons/Chat.svg', name: 'Support', url:''},
  ]
  

const details: React.FC = () => {
  return (
    <div className="flex justify-end w-screen h-screen ">
      <div className="flex sm:w-full md:w-1/2 lg:w-1/3 h-screen bg-white overflow-y-scroll scroll-smooth scrollbar-thin  scrollbar-track-rounded-full  scrollbar-thumb-rounded-full scrollbar-thumb-gray-300">
        <div className="flex w-full flex-col">
          <Navbar className="bg-white" />
          <div className="flex px-5 items-center pb-3">
            <a href="/history">
              <img src="/assets/icons/left.svg" alt="" />
            </a>
            <h1 className="text-2xl px-4">Ride Details</h1>
          </div>
          <div className="w-full px-5 overflow-hidden h-40">
            <img
              src="/assets/images/map.png"
              alt=""
              className="h-full w-full  rounded-t-xl"
            />
          </div>
          <DetailBlock
            date={detailsBlock.date}
            source={detailsBlock.source}
            destination={detailsBlock.destination}
            price={detailsBlock.price}
          />
          <Favourite />
          <div className="flex flex-col py-5 px-5 gap-2">
            {labels.map((label) => (
                <Labels name={label.name} url={label.url} className='' src={label.src}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default details;
