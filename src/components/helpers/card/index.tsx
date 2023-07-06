import React from 'react'

interface CardProps {
className ?: string,
url : string,
label : string,
id : string,
};

const index: React.FC <CardProps> = ({className, url, label, id}) => {
  return (
    <div className={`${className} z-10 flex flex-col items-center h-20 w-full rounded-lg justify-center cursor-pointer`} key={id}>

        <img src={url} alt="" className='w-20'/>
        <label >{label}</label>
    </div>
  )
}

export default index;