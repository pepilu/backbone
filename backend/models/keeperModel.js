const mongoose = require("mongoose");

const keeperSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name value"],
    },
    surname: {
      type: String,
      required: [true, "Please add a surname value"],
    },
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Keeper", keeperSchema);
