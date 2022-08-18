const express = require("express");
const router = express.Router();
const {
  //getKeepers,
  setKeeper,
  //updateKeeper,
  //deleteKeeper,
} = require("../controllers/keeperController");

router.route("/").post(setKeeper);
//router.route("/:id").put(updateKeeper).delete(deleteKeeper);

module.exports = router;
