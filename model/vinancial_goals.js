const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");

const Vinancial_goals = sequelize.define(
  "Vinancial_goals",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    goal_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    target_amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    deadline: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM("ongoin", "achieved", "failed"),
      allowNull: false,
    },
  },
  {
    tableName: "Vinancial_goals_tb",
    timestamps: true,
  },
);

module.exports = Vinancial_goals;
