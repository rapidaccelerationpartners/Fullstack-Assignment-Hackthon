const mongoose=require("mongoose");

const RootSchema=new mongoose.Schema({
   trainName:{
    type:String,
    require:true
   },
   trainNumber:{
    type:Number,
    require:true
   },
   startTime:{
    type:Number,
    require:true
   },
   returnTime:{
    type:Number,
    require:true
   },
   speed:{
    type:Number,
    require:true
   },
   trainRoot:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"root"
   }

})

module.exports=mongoose.model("train",RootSchema)