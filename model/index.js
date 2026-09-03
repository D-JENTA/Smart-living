const User = require("./user.js");
const Transaction = require("./transaction_tb.js");
const Activity_logs = require("./activity-logs.js");
const Activity_category = require("./activity_category.js");
const Vinancial_goals = require("./vinancial_goals.js");

User.hasMany(Transaction, { foreignKey: "id_user" });
Transaction.belongsTo(User, {foreignKey :})
