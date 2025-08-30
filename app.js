//Project (user authenticated drive)
const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const connectToDb = require("./config/db");

dotenv.config();
const server = express();

// connect to MongoDB
connectToDb();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser());

// for routing
const userRout = require("./routes/user.routes");
server.use("/user", userRout);

const indexRout = require("./routes/index.routes");
server.use("/", indexRout);

server.set("view engine", "ejs");

server.listen(3000, () => {
  console.log("Server running on PORT: 3000");
});
