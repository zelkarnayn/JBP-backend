const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const cors = require("cors");
const path = require("path");

app.use(cors());
app.use(express.json());
app.use(require("./routes/phones.route"));
app.use(require("./routes/compare.route"));
app.use(require("./routes/file.route"));
app.use("/files", express.static(path.resolve(__dirname, "files")));

console.log(process.env.PORT);

const server = async () => {
  try {
    mongoose.connect(
      process.env.MONGO_DB,
      () => {
        console.log("Успешное подключение к БД");
      }
    );
    app.listen(4000, () => {
      console.log("Сервер успешно запущен");
    });
  } catch (error) {
    console.log(error.message);
  }
};

server();
