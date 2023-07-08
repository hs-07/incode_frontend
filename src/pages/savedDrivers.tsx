import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/common";
import axios from "axios";

const API = "https://incode-backend.onrender.com/api/bookmarks";

interface SavedDriversProps {
  driverName: string;
  phoneNumber: string;
  tripDate: string;
}

const SavedDrivers: React.FC<SavedDriversProps> = ({
  driverName,
  phoneNumber,
  tripDate,
}) => {
  const [drivers, setDrivers] = useState<SavedDriversProps[]>([]);

  const getDrivers = async (url: string) => {
    try {
      const res = await axios.get(url);
      setDrivers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDrivers(`${API}/allBookmarks/current/64a3f3a98424bf3d4b637c26`);
  }, []);
  return (
    <div className="flex justify-end w-screen h-screen ">
      <div className="flex sm:w-full md:w-1/2 lg:w-1/3 h-screen bg-white overflow-y-scroll scroll-smooth scrollbar-thin  scrollbar-track-rounded-full  scrollbar-thumb-rounded-full scrollbar-thumb-gray-300">
        <div className="flex w-full flex-col">
          <Navbar className="bg-white" />
          <div className="flex px-5 items-center pb-3">
            <a href="/details">
              <img src="/assets/icons/left.svg" alt="" />
            </a>
            <h1 className="text-2xl px-4">Saved drivers</h1>
          </div>
          <div className="">
            {drivers.map((driver) => (
              <div className="flex justify-between mx-5 py-3 border-b-2 border-[#A7E92F]">
                <div className="flex">
                  <img src="/assets/icons/user.svg" alt="" />
                  <div className="flex flex-col text-sm">
                    <h1>{driver.driverName}</h1>
                    <h1>{driver.tripDate}</h1>
                    <h1>{driver.phoneNumber}</h1>
                  </div>
                </div>
                <img src="/assets/icons/heart-2.svg" alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedDrivers;
