module.exports = function (passport) {
const path = require("path");
const router = require("express").Router();
const fridgeController = require("../controllers/fridgeController.js");

// Matches with "/api/investors"
router.route("/")
  .get(fridgeController.findAll)
  .post(fridgeController.create)

// Matches with "/api/investors/:id"
router
  .route("/:id")
  .get(fridgeController.findById)
  .put(fridgeController.update)
  .delete(fridgeController.remove)

	return router;
};

