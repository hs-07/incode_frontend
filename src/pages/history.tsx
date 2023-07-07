import React from 'react'
import { Navbar} from "@/components/common";
import {Tab} from "@/components/helpers";

const historyConst = {
Request: 'Request History',
Upcoming: 'Upcoming Requests',
Past: 'Past Requests',
}

const history: React.FC = () => {
  return (
    <div className="flex w-screen justify-end">
      <div className="sm:w-full md:w-1/2 lg:w-1/3 sm:h-screen bg-white">
        <div className="">
          <Navbar className= 'bg-white'/>
          <div className="flex flex-col px-5 lg:pb-4 sm:pb-2">
            <h1 className="text-xl font-semibold">{historyConst.Request}</h1>
            <h3 className="">{historyConst.Upcoming}</h3>
          </div>
          <div className="p-5">
            <Tab />
          </div>
        </div>
      </div>
            
          </div>
  )
}

export default history