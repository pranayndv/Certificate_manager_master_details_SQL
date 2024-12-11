const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");
const Category = require("./Category");

const Question = sequelize.define("Question", {
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  question_text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

Question.belongsTo(Category, { foreignKey: "category_id" });

module.exports = Question;
