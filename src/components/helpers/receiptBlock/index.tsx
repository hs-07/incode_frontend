import React from 'react'

interface ReceiptBlockProps {
    name: string,
    price: string,
    className: string,
}

const index: React.FC<ReceiptBlockProps> = ({name, price, className}) => {
  return (
    <div className={`${className} flex justify-between pt-4`}>
        <h2 className='text-xs'>{name}</h2>
        <h2 className='text-xs'>{price}</h2>
    </div>
  )
}

export default index