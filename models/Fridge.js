const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Fridge = new Schema({

     itemName:{ type :String, required: false},
     img : {type :String , required:false}


    
});

module.exports = mongoose.model("Fridge", Fridge);