import React, { useState } from 'react'
import "./Train.css"
import { useDispatch, useSelector } from 'react-redux'
import { details } from '../../action/action';
import { Dialog } from '@mui/material';
import Station from '../Station/Station';
import Loading from '../Loading/Loading';

const Train = ({TrainName,TrainNumber,ArrivalTime,DepartureTime,Price,start,end,trainId}) => {

    const dispatch=useDispatch();
    const [open,setOpen]=useState(false);

    const detailHandler=()=>{
       dispatch(details(start,end,trainId));
       setOpen(true);
    }

    const {loading,data}=useSelector((state)=>state.Details)

  return (
    <div>
        <div className='Train'>
        <div className='Train_component'>
            <h3>Train Name</h3>
            <h4>{TrainName}</h4>
        </div>
        <div className='Train_component'>
            <h3>Train Number</h3>
            <h4>{TrainNumber}</h4>
        </div>
        <div className='Train_component'>
            <h3>Arrival Time</h3>
            <h4>{ArrivalTime}</h4>
        </div>
        <div className='Train_component'>
            <h3>Departure Time</h3>
            <h4>{DepartureTime}</h4>
        </div>
        <div className='Train_component'>
            <h3>Price</h3>
            <h4>{Price}</h4>
        </div>
        <div className='Train_component'>
            <button onClick={detailHandler}>Details</button>
        </div>
    </div>
    <div>
        <Dialog
        open={open}
        onClose={()=>setOpen(false)}
        >
            <div className='DialogBox'>
             {
                open?(
                    loading?<Loading/>:(
                        data.success&&data.details.length>0?data.details.map((station,index)=>(
                            <Station
                            key={index}
                            StationName={station.StationName}
                            ArrivalTime={station.ArrivalTime}
                            Distance={station.Distance}
                            Price={station.Price}
                            />
                          )):<h1>Something is wrong</h1>
                    )
                ):null
             }
            </div>
        </Dialog>
    </div>
    </div>
  )
}

export default Train