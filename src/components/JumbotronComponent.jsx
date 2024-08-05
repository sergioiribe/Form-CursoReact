import React from 'react'

export const JumbotronComponent = (props) => {
  return (
    <div className='w-[50%] bg-white shadow-lg p-10 rounded m-auto gap-2 flex flex-col'>
        <h1 className='text-3xl font-bold'>Hello, World!</h1>
        <p>{props.children}</p>
        <button className='p-2 bg-blue-500 text-white rounded w-1/4 '>Learn more</button>
    </div>
  )
}
