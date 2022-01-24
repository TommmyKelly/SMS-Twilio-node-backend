const express = require("express");
const router = express.Router();
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/", (req, res) => {
  const msg = req.body.msg;
  client.messages
    .create({
      body: msg,
      from: process.env.FROM_NUMBER,
      to: process.env.TO_NUMBER,
    })
    .then((message) => {
      console.log(message.status);
      res.status(200).send(message.status);
    })
    .done();
});

module.exports = router;
// router.post
