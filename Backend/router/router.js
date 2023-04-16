const express=require("express");
const { createRoot } = require("../component/root");
const { createStation } = require("../component/station");
const { createTrain, betTrain, trainDetails } = require("../component/train");

const router=express.Router();

router.post("/root",createRoot);
router.post("/station",createStation);
router.post("/train",createTrain);
router.post("/allTrains",betTrain);
router.post("/details",trainDetails);

module.exports=router