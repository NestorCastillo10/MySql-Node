// import  packages
const express = require("express");
const app = express();

//routes
app.get("/", (req, res) => {
  res.send("Landing page!");
});

app.get("/addelf", (req, res) => {
  res.send("add elf");
});

//port
app.listen(3050, () => {
  console.log("Hohoho!! App listening on port 3050");
});
