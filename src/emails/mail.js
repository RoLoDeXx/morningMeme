const sgmail = require("@sendgrid/mail");
const apiKey =
  "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";

sgmail.setApiKey(apiKey);

// sgmail.send({
//   to: "dexxrolo@gmail.com",
//   from: "imailtosamarth@gmail.com",
//   subject: "sendGrid",
//   text: "Hey Sam from Sam."
// });

const sendMorningMail = (email, name) => {
  sgmail.send({
    to: email,
    from: "imailtosamarth@gmail.com",
    subject: "Here's your MorningMeme",
    text: `Here\'s your package ${name}.`,
    html:
      '<img src="https://cnet3.cbsistatic.com/img/KOI0iK4uPAbP1g7B_cnVqSLpuic=/756x567/2019/04/15/fbcaf3e4-0750-47d8-9609-4eea24206dc3/spacexstarship.jpg">',
    sendAt: 1
  });
};

module.exports = { sendMorningMail };
