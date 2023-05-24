import axios from "axios";


export const allTrainAction=(start,end)=>async(dispatch)=>{
    try {

        dispatch({
            type:"allTrainRequest"
        })

        console.log("allTrains api is call");

        const {data}=await axios.post("https://train-app-backend.onrender.com/api/v1/allTrains",{start,end});
        console.log(data)

        dispatch({
            type:"allTrainSuccess",
            playload:data
        })
        
    } catch (error) {
        dispatch({
            type: "allTrainFailure",
            playload: error.response.data,
          });
    }
}


export const details=(start,end,trainId)=>async(dispatch)=>{
    try {
        dispatch({
            type:"detailsRequest"
        })

        console.log("details api is call");

        const {data}=await axios.post("https://train-app-backend.onrender.com/api/v1/details",{start,end,trainId});
        // http://localhost:4000/api/v1/details

        dispatch({
            type:"detailsSuccess",
            playload:data
        })
    } catch (error) {
        dispatch({
            type: "detailsFailure",
            playload: error.response.data,
          });
    }
}