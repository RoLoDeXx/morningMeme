const express = require("express");
const { sendMorningMail } = require("./emails/mail");

const app = express();

app.get("/", (req, res) => {
  res.send("working");
  sendMorningMail("yoyos55740@gmail.com", "Samarth");
});

app.listen(process.env.PORT || 3000);
