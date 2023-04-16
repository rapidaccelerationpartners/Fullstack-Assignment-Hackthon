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

app.use("/api/v1",router)

app.listen(process.env.Port,()=>{
console.log("server is running")
})