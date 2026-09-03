require("dotenv").config();
const sequelize = require("./config/db.js");
const express = require("express");
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("server express running");
});

app.use((err, req, res, next) => {
  console.error("ERROR", err.message);
  res.status(500).json({
    status: "error",
    message: err.message || "Internal server error",
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`server running on ${PORT}`);
});
