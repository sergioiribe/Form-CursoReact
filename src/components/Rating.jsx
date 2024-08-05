import React from 'react'
import { FaStar, FaRegStar } from 'react-icons/fa'
import { useState } from 'react'



export const Rating = (props) => {

  const styles = {
    starStyle:{
      color: 'gold'
    }
  }

  const [rating, setRating ] = useState(props.data.rating)

  const handleClick = (value) => {
    setRating(value)
  }

  return (
    <div className="flex" >
        <div className="flex flex-row">
          {/* <div className="mb-2">Rating: {rating}</div> */}
          <div className="flex m-auto" style={styles.starStyle}>
            {rating >= 1 ? (
              <FaStar  onClick={() => handleClick(1)} style={{cursor:'pointer'}} />
            ) : (
              <FaRegStar  onClick={() => handleClick(1)} style={{cursor:'pointer'}}/>
            )}
            {rating >= 2 ? (
              <FaStar  onClick={() => handleClick(2)} style={{cursor:'pointer'}}/>
            ) : (
              <FaRegStar onClick={() => handleClick(2)} style={{cursor:'pointer'}}/>
            )}
            {rating >= 3 ? (
              <FaStar  onClick={() => handleClick(3)} style={{cursor:'pointer'}} />
            ) : (
              <FaRegStar  onClick={() => handleClick(3)} style={{cursor:'pointer'}}/>
            )}
            {rating >= 4 ? (
              <FaStar  onClick={() => handleClick(4)} style={{cursor:'pointer'}}/>
            ) : (
              <FaRegStar  onClick={() => handleClick(4)} style={{cursor:'pointer'}}/>
            )}
            {rating >= 5 ? (
              <FaStar  onClick={() => handleClick(5)} style={{cursor:'pointer'}}/>
            ) : (
              <FaRegStar onClick={() => handleClick(5)} style={{cursor:'pointer'}}/>
            )}
          </div>
          <div className="text-sm flex" style={{color: 'gold'}}>{props.data.numOfReviews}</div>
        </div>
    </div>
  )
}
