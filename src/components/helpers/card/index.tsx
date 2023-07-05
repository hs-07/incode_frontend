import React from 'react'

interface CardProps {
className : string,
url : string,
label : string,
id : string
};

const index: React.FC <CardProps> = ({className, url, label, id}) => {
  return (
    <div className={`${className} flex flex-col items-start h-20 w-20 cursor-pointer`} key={id}>
        <img src={url} alt="" className='w-20'/>
        <label >{label}</label>
    </div>
  )
}

export default index;