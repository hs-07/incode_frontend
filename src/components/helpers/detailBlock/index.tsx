import React from 'react'
interface DetailsProps {
    date: string,
    source: string ,
    destination: string,
    price:string,
}


const index : React.FC <DetailsProps>= ({date, source, destination, price}) => {
  return (
    <div className="flex flex-col py-5 mx-5 px-3 gap-3 border">
      <div className="flex gap-2">
        <img src="/assets/icons/calendar-days.svg" alt="" />
        <h2>{date}</h2>
      </div>
      <div className="flex gap-2">
        <img src="/assets/icons/blueRing.svg" alt="" />
        <h2>{source}</h2>
      </div>
      <div className="flex gap-2">
        <img src="/assets/icons/greenRing.svg" alt="" />
        <h2>{destination}</h2>
      </div>
      <div className="flex gap-2">
        <img src="/assets/icons/ruppee.svg" alt="" className='p-1'/>
        <h2>{price}</h2>
      </div>
    </div>
  )
}

export default index