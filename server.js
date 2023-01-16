const express = require("express");
const connectDB = require("./config/connectDB");
const foodRoutes = require("./routes/food");
const app = express();
const port = 4562;
app.use(express.json());

connectDB();
app.use("/api/food", foodRoutes);
app.listen(port, console.log(`app is runnig on port ${port}`));
