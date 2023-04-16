import { createReducer } from "@reduxjs/toolkit";


export const allTrains=createReducer({
    loading:true,
    data:null
},
{
    allTrainRequest:(state)=>{
        state.loading=true
    },

    allTrainSuccess:(state,action)=>{
        state.loading=false
        state.data=action.playload
    },

    allTrainFailure:(state,action)=>{
        state.loading=false
        state.data=action.playload
    },
})


export const details=createReducer({
    loading:true,
    data:null
},{

    detailsRequest:(state)=>{
        state.loading=true
    },

    detailsSuccess:(state,action)=>{
        state.loading=false
        state.data=action.playload
    },

    detailsFailure:(state,action)=>{
        state.loading=false
        state.data=action.playload
    },

})