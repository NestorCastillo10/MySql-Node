// import  packages
const express = require("express");
const app = express();
const mySql = require("mysql");
const faker = require("faker");
const bodyParser = require("body-parser");

const myPassword = "pass";
const database = "christmas_2020";
const table = "elves";

app.set("view engine", "ejs"); // set the view engine to ejs
app.use(bodyParser.urlencoded({ extended: true }));

//port
app.listen(3050, () => {
  console.log("HO HO HO!! App listening on port 3050");
});

//routes
app.get("/", (req, res) => {
  db.query(
    `SELECT COUNT(DISTINCT email) AS count FROM ${database}.${table} WHERE email LIKE '%@%.%'`,
    (error, results) => {
      if (error) throw error;
      let msg = results[0].count;
      res.render("landingPage", { data: msg });
    }
  );
});

app.post("/addelf", (req, res) => {
  let person = { email: req.body.email };
  db.query(`INSERT INTO ${database}.${table} SET ?`, person, (error) => {
    if (error) throw error;
    res.redirect("/");
    console.log("Elf is added");
  });
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

//database seeding
let people = [];

for (let i = 0; i < 358; i++) {
  people.push([faker.internet.email(), faker.date.past()]);
}

db.query(
  `INSERT INTO ${database}.${table} (email, created_at) VALUES ?`,
  [people],
  (error) => {
    if (error) throw error;
    console.log("...database seeding completed successfully! Ho Ho Ho!");
  }
);
