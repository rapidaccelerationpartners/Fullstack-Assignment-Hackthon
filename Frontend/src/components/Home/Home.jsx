import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { allTrainAction } from '../../action/action';
import Train from '../Train/Train';
import './Home.css'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import Loading from '../Loading/Loading';

const Home = () => {
    
  const dispatch=useDispatch();
    const [start,setStart]=useState("");
    const[end,setEnd]=useState("");
    const [call,setCall]=useState(false)

    const submitHandler=(e)=>{
      e.preventDefault();
        dispatch(allTrainAction(start,end))
        setCall(true)
    }

    const {loading,data}=useSelector((state)=>state.AllTrain);



  return (
    
    <div className='Home'>
        <form className='form' onSubmit={submitHandler}>
            <input type='text' placeholder='starting Station' value={start} onChange={(e)=>setStart(e.target.value)} />
            <div><TrendingFlatIcon/></div>
            <input type='text' placeholder='end Station' value={end} onChange={(e)=>setEnd(e.target.value)}/>
            <button type='submit'>Find Train</button>
        </form>
        <div>
          {
             call?(loading?<Loading/>:(
              data&&data.success&&data.Trains.length>0?data.Trains.map((value,index)=>(
                <Train 
                key={index}
                TrainName={value.TrainName}
                TrainNumber={value.TrainNumber}
                ArrivalTime={value.ArrivalTime}
                DepartureTime={value.DepartureTime}
                Price={value.Price}
                start={start}
                end={end}
                trainId={value.TrainId}
  
                />
               )):<h1>No path between them</h1>
             )):null
          }
        </div>
    </div>
  )
}

export default Home