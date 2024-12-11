const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { sequelize, syncDB } = require("./models");
const categoryRoutes = require("./routes/categoryRoutes");
const questionRoutes = require("./routes/questionRoutes");

const app = express();


app.use(cors());
app.use(bodyParser.json());


app.use("/api/categories", categoryRoutes);
app.use("/api/questions", questionRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await syncDB();
});
