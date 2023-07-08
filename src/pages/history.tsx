import React, { useEffect, useState } from "react";
import { Navbar } from "@/components/common";
import axios from "axios";
import { Tab, Requests, Labels } from "@/components/helpers";

interface RequestProps {
  destinationAddress: string;
  startTime: string;
  price: string;
  _id: string;
}

const API = "https://incode-backend.onrender.com/api/trips";

const historyConst = {
  Request: "Request History",
  Upcoming: "Upcoming Requests",
  Past: "Past Requests",
};

const labels = [
  { src: "/assets/icons/Clock.svg", name: "View older requests", url: "" },
  {
    src: "/assets/icons/heart.svg",
    name: "View saved drivers",
    url: "/savedDrivers",
  },
];

const History: React.FC<RequestProps> = () => {
  const [trips, setTrips] = useState<RequestProps[]>([]);

  const getTrips = async (url: string) => {
    try {
      const res = await axios.get<{ trips: RequestProps[] }>(url);
      setTrips(res.data.trips);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTrips(`${API}/getCurrentUserTrips?userId=64a3f3a98424bf3d4b637c26`);
  }, []);

  return (
    <div className="flex justify-end w-screen h-screen">
      <div className="flex sm:w-full md:w-1/2 lg:w-1/3 h-screen bg-white ">
        <div className="flex w-full flex-col">
          <Navbar className="bg-white" />
          <div className="flex flex-col px-5 pb-2 ">
            <h1 className="text-xl font-semibold">{historyConst.Request}</h1>
            <h3 className="">{historyConst.Upcoming}</h3>
          </div>
          <div className="sm:py-2 sm:px-5">
            <Tab />
          </div>
          {/* Requests starts */}
          <div className="flex flex-col px-5 overflow-y-scroll scroll-smooth scrollbar-thin  scrollbar-track-rounded-full  scrollbar-thumb-rounded-full scrollbar-thumb-gray-300">
            <h1 className="">{historyConst.Past}</h1>
            {trips.map((trip) => (
              <a href="/details" key={trip._id}>
                <Requests
                  name={trip.destinationAddress}
                  date={trip.startTime}
                  price={trip.price}
                />
              </a>
            ))}
          </div>
          {/* Requests ends */}
          <div className="flex flex-col lg:py-4 sm:py-5 px-5 gap-2">
            {labels.map((label, index) => (
              <Labels
                key={index}
                name={label.name}
                url={label.url}
                className="w-10"
                src={label.src}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
