const express=require("express");
const dotenv=require("dotenv");
const { connect } = require("./database/connect");
const cors=require("cors");
const router = require("./router/router");
dotenv.config();

connect();

const app=express();
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
  res.status(200).json({
    success:true,
    message:"the train app is working"
  })
})
app.use("/api/v1",router)

app.listen(process.env.Port,()=>{
console.log("server is running")
})