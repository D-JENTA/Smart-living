const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");

const Transaction = sequelize.define(
  "sequelize",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIcrement: true,
    },
    user_id: {
      type: DataTypes.ENUM("income", "expense"),
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING(100),
      allowNUll: false,
    },
    amount: {
      Type: DataTypes.DECIMAL,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING(100),
      allowNUll: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "transation_tb",
    timesamps: true,
  },
);

module.exports = Transaction;
