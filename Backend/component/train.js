const Root = require("../model/Root");
const Station = require("../model/Station");
const Train = require("../model/Train");

exports.createTrain = async (req, res) => {
  try {
    const { trainName, trainNumber, startTime, returnTime, speed, rootId } =
      req.body;

    if (
      !trainName ||
      !trainNumber ||
      !startTime ||
      !returnTime ||
      !speed ||
      !rootId
    ) {
      return res.status(400).json({
        success: false,
        message: "provide all document",
      });
    }

    const newTrain = await Train.create({
      trainName,
      trainNumber,
      startTime,
      returnTime,
      speed
    });

    const root = await Root.findOne({ _id: rootId });
    newTrain.trainRoot = root;
    root.trainsOnTheRoot.push(newTrain._id);
    await newTrain.save();
    await root.save();

    res.status(201).json({
      success: true,
      newTrain,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// return all the train between two station

exports.betTrain = async (req, res) => {
  try {
    const { start, end } = req.body;

    const startStation = await Station.findOne({ stationName: start });
    const endStation = await Station.findOne({ stationName: end });

    if (!startStation || !endStation) {
      return res.status(400).json({
        success: false,
        message: "station not found",
      });
    }

    if (
      startStation.belongInRoot.toString() !==
      endStation.belongInRoot.toString()
    ) {
      return res.status(400).json({
        success: false,
        message: "no path between two station",
      });
    }

    const theRoot = await Root.findOne({ _id: startStation.belongInRoot });

    let up = true;
    
    if(startStation.distance>endStation.distance)
    {
        up=false
    }


    let maxDis = 0;
    const inBetweenStation = [];
    await Promise.all(
      theRoot.intermediateStations.map(async (value) => {
        let station = await Station.findOne({ _id: value });
        maxDis=Math.max(maxDis,station.distance);

        if (
          (station.distance >= startStation.distance &&
            station.distance <= endStation.distance) ||
          (station.distance <= startStation.distance &&
            station.distance >= endStation.distance)
        ) {
          const obj = {
            stationName: station.stationName,
            distance: station.distance,
          };
          inBetweenStation.push(obj);
        }
      })
    );
    console.log(inBetweenStation);


    if(up)
    {
        inBetweenStation.sort((a, b) => a.distance - b.distance);
    }
    else
    {
        inBetweenStation.sort((a, b) => b.distance - a.distance);
    }

    const Trains=[];


    if(up)
    {
        await Promise.all(
            theRoot.trainsOnTheRoot.map(async (value) => {
              const train=await Train.findOne({_id:value});
              const arrivalTime=train.startTime+(startStation.distance/train.speed);
              const departureTime=train.startTime+(endStation.distance/train.speed);
              const price=(endStation.distance-startStation.distance)*1.25;
    
              const obj={
                TrainName:train.trainName,
                TrainNumber:train.trainNumber,
                ArrivalTime:arrivalTime.toFixed(2),
                DepartureTime:departureTime.toFixed(2),
                Price:price.toFixed(2)
              }
    
              Trains.push(obj);
            })
          );
    }
    else
    {
        await Promise.all(
            theRoot.trainsOnTheRoot.map(async (value) => {
              const train=await Train.findOne({_id:value});
              const arrivalTime=train.returnTime+(maxDis-startStation.distance/train.speed);
              const departureTime=train.returnTime+(maxDis-endStation.distance/train.speed);
              const price=(startStation.distance-endStation.distance)*1.25;
    
              const obj={
                TrainName:train.trainName,
                TrainNumber:train.trainNumber,
                ArrivalTime:arrivalTime.toFixed(2),
                DepartureTime:departureTime.toFixed(2),
                Price:price.toFixed(2)
              }
    
              Trains.push(obj);
            })
          );

    }


      res.status(200).json({
        success:true,
        Trains
      })

    


    

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


// train details

exports.trainDetails=async(req,res)=>{
    try {

        const { start, end,trainId } = req.body;

        const startStation = await Station.findOne({ stationName: start });
        const endStation = await Station.findOne({ stationName: end });
        const theTrain=await Train.findOne({_id:trainId});
    
        if (!startStation || !endStation||!theTrain) {
          return res.status(400).json({
            success: false,
            message: "station not found",
          });
        }
    
        if (
          startStation.belongInRoot.toString() !==
          endStation.belongInRoot.toString()
        ) {
          return res.status(400).json({
            success: false,
            message: "no path between two station",
          });
        }
    
        const theRoot = await Root.findOne({ _id: startStation.belongInRoot });
    
        let up = true;
        
        if(startStation.distance>endStation.distance)
        {
            up=false
        }
    
    
        let maxDis = 0;
        const inBetweenStation = [];
        await Promise.all(
          theRoot.intermediateStations.map(async (value) => {
            let station = await Station.findOne({ _id: value });
            maxDis=Math.max(maxDis,station.distance);
    
            if (
              (station.distance >= startStation.distance &&
                station.distance <= endStation.distance) ||
              (station.distance <= startStation.distance &&
                station.distance >= endStation.distance)
            ) {
              const obj = {
                stationName: station.stationName,
                distance: station.distance,
              };
              inBetweenStation.push(obj);
            }
          })
        );
        console.log(inBetweenStation);
    
    
        if(up)
        {
            inBetweenStation.sort((a, b) => a.distance - b.distance);
        }
        else
        {
            inBetweenStation.sort((a, b) => b.distance - a.distance);
        }


        const details=[];

        if(up)
        {
            inBetweenStation.map((value)=>{
                const arrivalTime=theTrain.startTime+value.distance/theTrain.speed;
                const distance=value.distance-startStation.distance;
                const price=distance*1.25;

                const obj={
                    StationName:value.stationName,
                    ArrivalTime:arrivalTime.toFixed(2),
                    Distance:distance.toFixed(2),
                    Price:price.toFixed(2)
                }
                details.push(obj);

            })
        }
        else
        {
            inBetweenStation.map((value)=>{
                const arrivalTime=theTrain.returnTime +(maxDis-value.distance)/theTrain.speed;
                const distance=startStation.distance-value.distance;
                const price=distance*1.25;

                const obj={
                    StationName:value.stationName,
                    ArrivalTime:arrivalTime.toFixed(2),
                    Distance:distance.toFixed(2),
                    Price:price.toFixed(2)
                }
                details.push(obj)

            })
        }


        res.status(200).json({
            success:true,
            details
        })


        
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
          });
    }
}
