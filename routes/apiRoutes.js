module.exports = function (passport) {
const path = require("path");
const router = require("express").Router();
const fridgeController = require("../controllers/fridgeController.js");

router.route("/")
  .get(fridgeController.getUserWithFridges)
  .post(fridgeController.create)

router
  .route("/:id")
  .post(fridgeController.update)
  .get(fridgeController.findById)
  .delete(fridgeController.remove)

	return router;
};

