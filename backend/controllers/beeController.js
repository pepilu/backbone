const asyncHandler = require("express-async-handler");
const Beehive = require("../models/beeModel");

const getBeehives = asyncHandler(async (req, res) => {
  const beehives = await Beehive.find();
  res.status(200).json(beehives);
});

const setBeehive = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    //Express build in error handler
    throw new Error("Please add a text field");
  }
  const beehives = await Beehive.create({
    text: req.body.text,
    coordinates: {
      latitude: req.body.latitude,
      longitude: req.body.longitude,
    },
  });
  res.status(200).json(beehives);
});

module.exports = {
  getBeehives,
  setBeehive,
};
