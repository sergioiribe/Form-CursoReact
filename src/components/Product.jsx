import React from 'react'
import { Rating } from './Rating'



export const Product = (props) => {


  return (
    <div className='bg-white w-[50%] shadow-2xl rounded m-auto my-10'>
      <div className='p-10 flex gap-5'>
        <img  src={props.data.imageUrl} alt="Generic placeholder image"  style={{ width: '100px', height: '100px' }} />
        <div className='text-start'>
          <h5 className='text-md font-bold'>{props.data.productName}</h5>
          <p className='text-sm'>{props.data.releasedData}</p>
          <Rating data={props.data} />
          <p className='text-sm'>{props.data.description}</p>
        </div>
      </div>
    </div>
  )
}
