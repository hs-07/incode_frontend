import React from 'react'

interface LabelProps {
name: string,
url: string,
}

const index: React.FC<LabelProps> = ({name, url}) => {
  return (
    <div className="flex justify-between items-center border border-gray-200 rounded-xl p-2">
      <div className="flex">
      <img src={url} alt="" className='pr-3 w-10'/>
      <h1 className="text-gray-500">{name}</h1>
      </div>
      <img src="/assets/icons/right-light.svg" alt="" />
    </div>
  )
}

export default index