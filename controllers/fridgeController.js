const db = require("../models");

// Defining methods for the investorsController
module.exports = {
  findAll: function(req, res) {
    db.Fridge
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => console.log(dbModel))
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
  }
};