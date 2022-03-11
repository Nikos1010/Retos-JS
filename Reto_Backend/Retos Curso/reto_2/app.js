const express = require("express");

const app = express();

// app.use((req, res, next) => {
//   console.log("First middleware");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("Second middleware");
//   res.send("<h1>Assigment</h1> <p>Number Two</p>");
// });

app.use("/users", (req, res, next) => {
  console.log("In the user");
  res.send('<h1>Hello Users</h1> <a href="/">View home</a>');
});

app.use("/", (req, res, next) => {
  console.log("In the home");
  res.send('<h1>Good look EveryOne</h1> <a href="/users">View user</a>');
});

app.listen(3000);
