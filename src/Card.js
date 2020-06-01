import React from 'react';
const Card=(props)=>{
  return(
    <div className="Card">
      <h3>{props.name}</h3>
      <p>{props.about}</p>
    </div>
  )
}

export default Card;
