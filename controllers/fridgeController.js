const db = require("../models");

// Defining methods for the investorsController
module.exports = {
  findAll: function(req, res) {
    db.Fridge
      .find(req.body)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Fridge
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Fridge
      .create(req.body)
      .then(function(fridges) {
        return db.User.findOneAndUpdate({_id: req.user._id}, { $push: { fridgeID: fridges._id } }, { new: true });
        })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Fridge
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {

    db.Fridge
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getUserWithFridges: function(req,res){
    db.User.findById(req.user._id).populate("fridgeID")
    .then(dbModel => res.json(dbModel))
        .then(dbModel => console.log(dbModel))
    .catch(err => res.status(422).json(err));

  
  },

  giphy: function(req,res){
    axios
    .get(URL)
    //   axios.get(BASEURL)
    .then(function(articles) {
      // We have access to the day as an argument inside of the callback function
      res.json(articles.data);
    });
}

};