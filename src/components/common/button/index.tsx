import React from 'react'
interface BtnProps {
  name: string,
  className?: string,
}

const index: React.FC<BtnProps> = ({name, className}) => {
  return (
    <button className={`${className} text-lg py-3 px-8 w-full rounded-xl text-gray-700 font-semibold leading-6 `}
    >{name}</button>
  )
}

export default index;