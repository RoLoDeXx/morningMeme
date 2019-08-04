const express = require("express");
const hbs = require("hbs");
const path = require("path");
const { sendMorningMail } = require("./emails/mail");

const mainRouter = require("./routes/mainRouter");

const app = express();
app.use(mainRouter);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../views"));
app.use(express.static(path.join(__dirname, "../public")));

app.listen(process.env.PORT, () => {
  console.log("Server started on port" + process.env.PORT);
});
