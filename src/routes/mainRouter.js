const express = require("express");
const schedule = require("node-schedule");

const router = new express.Router();

schedule.scheduleJob("*/1 * * * *", () => {
  for (let i = 0; i < 99; i++) {
    console.log(i + "sdfsfd");
  }
});

router.get("/", (req, res) => {
  //   let hours = new Date().getHours();
  //   let minutes = new Date().getMinutes();
  //   if (hours === 13 && minutes === 24)
  //   console.log("sdfsfd");

  //   res.send("working");
  res.render("index.hbs", {
    title: "Hello world"
  });
  //sendMorningMail("yoyos55740@gmail.com", "Samarth");
});

module.exports = router;
