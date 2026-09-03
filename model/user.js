const { DataTypes } = require("sequelize");
const sequelize = "../config/db.js";

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allwoNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNUll: false,
    },
  },
  {
    tableName: "user_tb",
    timestamps: true,
  },
);

module.exports = User;
