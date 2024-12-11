const sequelize = require("../config/dbConfig");
const Category = require("./Category");
const Question = require("./Question");

const syncDB = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("Database synced successfully!");
  } catch (error) {
    console.error("Failed to sync database:", error);
  }
};

module.exports = { sequelize, syncDB, Category, Question };
