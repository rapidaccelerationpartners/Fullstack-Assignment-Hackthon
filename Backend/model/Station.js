const mongoose = require("mongoose");

const RootSchema = new mongoose.Schema({
  stationName: {
    type: String,
    require: true,
  },

  belongInRoot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "root",
  },
  distance: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("station", RootSchema);
