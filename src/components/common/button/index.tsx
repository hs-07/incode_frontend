import React from 'react'
interface BtnProps {
  name: string,
}

const index: React.FC<BtnProps> = ({name}) => {
  return (
    <button className="text-lg py-3 px-8 w-full rounded-xl text-gray-700 font-semibold leading-6 font-barlow bg-[#A7E92F]"
    >{name}</button>
  )
}

export default index;