const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Fridge = new Schema({
  List: { type: String, required: false },
//   budget: { type: Number, min: 20000 , max: 10000000, required: false },
//   percentage: {type: Number, min: 0, max: 100, required: false}, 
});

module.exports = mongoose.model("Fridge", Fridge);