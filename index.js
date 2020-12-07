// import  packages
const express = require("express");
const app = express();
const mySql = require("mysql");

const myPassword = "pass";

//port
app.listen(3050, () => {
  console.log("Hohoho!! App listening on port 3050");
});

//routes
app.get("/", (req, res) => {
  res.send("Landing page!");
});

app.get("/addelf", (req, res) => {
  res.send("add elf");
});


//
const db = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: myPassword,
});
