const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Fridge = new Schema({
  List: { type: String, required: false },
});

module.exports = mongoose.model("Fridge", Fridge);