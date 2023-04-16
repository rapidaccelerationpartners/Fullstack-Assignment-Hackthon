import React from 'react'
import "./Station.css"

const Station = ({StationName,ArrivalTime,Distance,Price}) => {
  return (
    <div className='Station'>
        <div className='Station_component'>
            <h3>Station Name</h3>
            <h4>{StationName}</h4>
        </div>
        <div className='Station_component'>
            <h3>Arrival Time</h3>
            <h4>{ArrivalTime}</h4>
        </div>
        <div className='Station_component'>
            <h3>Distance</h3>
            <h4>{Distance}</h4>
        </div>
        <div className='Station_component'>
            <h3>Price</h3>
            <h4>{Price}</h4>
        </div>
    </div>
  )
}

export default Station