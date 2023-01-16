const express = require("express");
const {
  Addfood,
  Getfood,
  Editfood,
  deleteFood,
} = require("../controlles/food");
const foodRoutes = express.Router();

foodRoutes.post("/add", Addfood);
foodRoutes.get("/get", Getfood);
foodRoutes.put("/edit/:id", Editfood);
foodRoutes.delete("/del/:id", deleteFood);
module.exports = foodRoutes;
