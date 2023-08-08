import React from 'react'
import card from "./card.scss";

const Card = ({item}) => {
  return (
    <div className='cardContainer'>
      <div className='image'>
        <img src={item}/>
      </div>
      <h3>Turquoise Cotton Anarkali Suit Set</h3>
    </div>
  )
}

export default Card
