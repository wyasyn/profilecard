import React from 'react'
import { Stats } from "../../components"
import { stats } from "../../constants"

const Card = (props) => {
  const stat = stats.map(item => {
    return (
              <Stats
                    key={item.number} 
                    number={item.number}
                    title={item.title}
              />
            )
  })
  return (
    <div className='card'>
        <div className="card_header">
            <img src={props.cardBg} alt='' />
            <div className="profile-pic">
                <img src={props.pic} alt="" />
            </div>
        </div>
        <div className="content">
            <div className="content_header">
              <div className="inform">
                <h1>{props.name}</h1>
                <p>{props.age} </p>
              </div>
            <p>{props.city}</p>
            </div>
            <div className="stats">
              {stat}
            </div>
        </div>
    </div>
  )
}

export default Card