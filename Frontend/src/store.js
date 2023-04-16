import {configureStore} from"@reduxjs/toolkit"
import { allTrains, details } from "./reducer/reducer";

const store=configureStore({
    reducer:{
     AllTrain:allTrains,
     Details:details
    }
})

export default store;