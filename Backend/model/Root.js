const mongoose=require("mongoose");

const RootSchema=new mongoose.Schema({
   rootName:{
    type:String,
    require:true
   },
   intermediateStations:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"station"
   }],
   trainsOnTheRoot:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"train"
   }]

})

module.exports=mongoose.model("root",RootSchema)