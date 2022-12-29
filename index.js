const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(require("./routes/phones.route"));
app.use(require("./routes/compare.route"));
app.use(require("./routes/cart.route"));
app.use(require("./routes/user.route"))
app.use("/images", express.static(__dirname + "/images"));

const server = async () => {
  try {
    mongoose.connect(process.env.MONGO_DB, () => {
      console.log("Успешное подключение к БД");
    });
    app.listen(process.env.PORT, () => {
      console.log("Сервер успешно запущен");
    });
  } catch (error) {
    console.log(error.message);
  }
};

server();
