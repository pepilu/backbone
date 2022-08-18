const asyncHandler = require("express-async-handler");
const Keeper = require("../models/keeperModel");

const setKeeper = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    //Express build in error handler
    throw new Error("Please add a text field");
  }
  const keeper = await Keeper.create({
    name: req.body.name,
    surname: req.body.surname,
    text: req.body.text,
  });
  res.status(200).json(keeper);
});

module.exports = {
  setKeeper,
};
