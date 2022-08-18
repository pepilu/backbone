const mongoose = require("mongoose");

const beehiveSchema = mongoose.Schema(
  {
    coordinates: {
      latitude: { type: String, required: [true, "Please add a latitude"] },
      longitude: { type: String, required: [true, "Please add a longitude"] },
    },
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
    moving: Date,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Beehive", beehiveSchema);
