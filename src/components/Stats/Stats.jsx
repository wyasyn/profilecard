import React from 'react'

const Stats = (props) => {
  return (
    <div className='stat'>
        <h2>{props.number} </h2>
        <p>{props.title} </p>
    </div>
  )
}

export default Stats