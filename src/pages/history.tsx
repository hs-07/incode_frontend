import React from "react";
import { Navbar } from "@/components/common";
import { Tab, Requests,Labels } from "@/components/helpers";

const historyConst = {
  Request: "Request History",
  Upcoming: "Upcoming Requests",
  Past: "Past Requests",
};

const requests = [
{name:'JSSATE, Noida', date: '1 July', price:'₹300.00'},
{name:'JSSATE, Noida', date: '1 July', price:'₹320.00'},
{name:'JSSATE, Noida', date: '1 July', price:'₹300.00'},
]
const labels =[
{url:'/assets/icons/Clock.svg', name: 'View older requests'},
{url:'/assets/icons/heart.svg', name: 'View saved drivers'}
]

const history: React.FC = () => {
  return (
    <div className="flex w-screen justify-end ">
      <div className="sm:w-full md:w-1/2 lg:w-1/3 sm:h-screen bg-white overflow-y-scroll scroll-smooth scrollbar-thin  scrollbar-track-rounded-full  scrollbar-thumb-rounded-full scrollbar-thumb-gray-300">
        <div className="">
          <Navbar className="bg-white" />
          <div className="flex flex-col px-5 pb-2 ">
            <h1 className="text-xl font-semibold">{historyConst.Request}</h1>
            <h3 className="">{historyConst.Upcoming}</h3>
          </div>
          <div className="sm:py-2 sm:px-5">
            <Tab />
          </div>
          <div className="flex flex-col px-5">
            <h1 className="">{historyConst.Past}</h1>
            {requests.map((request) => (
                <Requests name={request.name} date={request.date} price={request.price}/>
            ))}
          </div>
          <div className="flex flex-col lg:py-5 sm:py-2 sm:px-5 gap-2">
            {labels.map((label) => (
                <Labels name={label.name} url={label.url} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default history;
