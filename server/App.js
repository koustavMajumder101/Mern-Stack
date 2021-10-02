const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cookieParser = require('cookie-parser');

//we will mention the path of config.env in App.js only
dotenv.config({ path: "./config.env" });

//we just need to import the conn file only!!
require("./db/conn");
//const User = require('./model/userSchema');

//accessing the  PORT key mentioned in config.env file
// make sure that your server and front end run on the samme port cause react run on port->3000
const port = process.env.PORT;

app.use(express.json());

//importing auth file
app.use(require("./router/auth"));

app.use(cookieParser());

const middleware = (req, res, next) => {
  console.log("middleware called");
  next();
};

/*
app.get("/about", middleware, (req, res) => {
  res.send("hello from about!!");
});*/

app.listen(port, () => {
  console.log("server is running");
});
