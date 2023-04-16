

export const allTrainAction=(start,end)=>(dispatch)=>{
    try {

        dispatch({
            type:" allTrainRequest"
        })

        console.log("allTrains api is call")
        
    } catch (error) {
        dispatch({
            type: " allTrainFailure",
            playload: error.response.data.message,
          });
    }
}