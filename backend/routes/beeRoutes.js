const express = require("express");
const router = express.Router();
const {
  getBeehives,
  setBeehive,
  //updateResult,
  //deleteResult,
} = require("../controllers/beeController");

router.route("/").get(getBeehives).post(setBeehive);
//router.route("/").get(getResults).post(setResult);
//router.route("/:id").put(updateResult).delete(deleteResult);

module.exports = router;
