// import  packages
const express = require("express");
const app = express();
const mySql = require("mysql");

const myPassword = "pass";
const database = "christmas_2020";
const table = "elves";

//port
app.listen(3050, () => {
  console.log("HO HO HO!! App listening on port 3050");
});

//routes
app.get("/", (req, res) => {
  res.send("Landing page!");
});

app.get("/addelf", (req, res) => {
  res.send("add elf");
});

// our db connections
const db = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: myPassword,
});

//creating database
db.query(`DROP DATABASE IF EXISTS ${database}`, (error) => {
  if (error) throw error;
});

db.query(`CREATE DATABASE ${database}`, (error) => {
  if (error) throw error;
  console.log("Ho Ho Ho here is the database...");
});

let q = `CREATE TABLE ${database}.${table} (
  id INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(45) NOT NULL,
  created_at DATETIME NOT NULL DEFAULT NOW(),
  PRIMARY KEY (id));`;

db.query(q, (error) => {
  if (error) throw error;
  console.log("...and the table!");
});
