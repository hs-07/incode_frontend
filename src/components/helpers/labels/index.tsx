import React from 'react'

interface LabelProps {
name: string,
url: string,
className?:string,
}

const index: React.FC<LabelProps> = ({name, url, className}) => {
  return (
    <div className="flex justify-between items-center border border-gray-200 rounded-xl p-2 cursor-pointer">
      <div className="flex">
      <img src={url} alt="" className={`pr-3 ${className}`}/>
      <h1 className="text-gray-500">{name}</h1>
      </div>
      <img src="/assets/icons/right-light.svg" alt="" />
    </div>
  )
}

export default index