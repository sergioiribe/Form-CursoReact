import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export const ClickRating = () => {

  const [star, setStar] = useState(0)

  const handleClick = (value) => {
    setStar(value)
  }

  return (
    <div className="flex">
      <div className="flex flex-col m-auto justify-center">
        <div className="mb-2">Rating: {star}</div>
        <div className="flex m-auto">
          {/* <FaStar
            onClick={() => handleClick(1)}
            color={1 <= star ? 'gold' : 'gray'}
            style={{ cursor: 'pointer' }}
          />
          <FaStar
            onClick={() => handleClick(2)}
            color={2 <= star ? 'gold' : 'gray'}
            style={{ cursor: 'pointer' }}
          />
          <FaStar
            onClick={() => handleClick(3)}
            color={3 <= star ? 'gold' : 'gray'}
            style={{ cursor: 'pointer' }}
          />
          <FaStar
            onClick={() => handleClick(4)}
            color={4 <= star ? 'gold' : 'gray'}
            style={{ cursor: 'pointer' }}
          />
          <FaStar
            onClick={() => handleClick(5)}
            color={5 <= star ? 'gold' : 'gray'}
            style={{ cursor: 'pointer' }}
          /> */}
          {[1, 2, 3, 4, 5].map((value) => (
            <FaStar
              key={value}
              onClick={() => handleClick(value)}
              color={value <= star ? 'gold' : 'gray'}
              style={{ cursor: 'pointer' }}
            />
          ))}
          
          
        </div>
        <div>
          
        </div>
      </div>
    </div>
  )
}
