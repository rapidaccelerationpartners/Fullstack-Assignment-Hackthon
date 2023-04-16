const Root = require("../model/Root");
const Station = require("../model/Station");

exports.createStation = async (req, res) => {
  try {
    const { stationName, distance, rootId } = req.body;

    if (!stationName || !distance || !rootId) {
      return res.status(400).json({
        success: false,
        message: "provide all data",
      });
    }

    const newStation = await Station.create({
      stationName,
      distance
    });

   const root=await Root.findOne({_id:rootId});
   newStation.belongInRoot=root;
   root.intermediateStations.push(newStation);

   await root.save();
   await newStation.save();

   res.status(201).json({
    success:true,
    newStation
   })

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
