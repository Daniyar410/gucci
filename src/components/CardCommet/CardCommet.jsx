import React from 'react'
import  './CardCommet.scss'

const CardCommet = ({star, name, commet}) => {
  return (
    <>
    <div className="card-comment">
        
        <div className="commet-racting">
            {star}
        </div>
        <h3>{name}</h3>
        <p>{commet}</p>
        </div>

    </>
    )
}

export default CardCommet