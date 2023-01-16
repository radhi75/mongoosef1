const food = require("../models/food");

exports.Addfood = async (req, res) => {
  try {
    const foods = new food(req.body);
    await foods.save();
    res.status(200).send({ msg: "new food", foods });
  } catch (error) {
    res.status(500).send("couldn't add food");
  }
};
exports.Getfood = async (req, res) => {
  try {
    const foods = await food.find();

    res.status(200).send({ msg: "list of food", foods });
  } catch (error) {
    res.status(500).send("couldn't get food");
  }
};
exports.Editfood = async (req, res) => {
  try {
    const foods = await food.findByIdAndUpdate(
      req.params.id,
      {
        $set: { ...req.body },
      },
      { new: true }
    );

    res.status(200).send({ msg: "edit  food", foods });
  } catch (error) {
    res.status(500).send("couldn't update food");
  }
};
exports.deleteFood = async (req, res) => {
  try {
    const foods = await food.findByIdAndDelete(req.params.id);

    res.status(200).send({ msg: "delete food" });
  } catch (error) {
    res.status(500).send("couldn't delete food");
  }
};
