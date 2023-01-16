const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: String,
  price: Number,
  recette: { type: String, required: true },
});
module.exports = mongoose.model("food", foodSchema);
