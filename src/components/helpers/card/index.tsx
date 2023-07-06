import React from 'react'

interface CardProps {
className ?: string,
url : string,
label : string,
id : string,
};

const index: React.FC <CardProps> = ({className, url, label, id}) => {
  return (
    <div className={`${className} z-10 flex flex-col items-center lg:h-20 sm:h-16 w-full rounded-lg justify-center cursor-pointer`} key={id}>

        <img src={url} alt="" className='lg:w-20 sm:w-17'/>
        <label className='sm:text-xs lg:text-lg'>{label}</label>
    </div>
  )
}

export default index;