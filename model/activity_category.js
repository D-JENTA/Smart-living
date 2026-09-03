const { DataTypes } = require("sequelize");

const sequelize = require("../config/db.js");

const Activity_category = sequelize.define(
  "Activity_category",
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
    category_n: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_default: {
      type: DataTypes.TINYINT(1),
      allowNull: true,
    },
  },
  {
    tableName: "Activity_category",
    timestamps: false,
  },
);

module.exports = Activity_category;
