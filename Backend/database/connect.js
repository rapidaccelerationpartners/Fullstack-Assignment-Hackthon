const mongoose=require("mongoose")


exports.connect=()=>{
    mongoose.connect(process.env.DatabaseUrl)
    .then((e)=>{
        console.log(`database is connected ${e.connection.host}`)
    })
    .catch((errr)=>{
        console.log(errr)
    })
}