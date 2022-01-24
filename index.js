const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});
app.use("/sms", require("./routes/sms"));

app.get("*", (req, res) => {
  res.send("Page not found");
});

app.listen(port, () => console.log(`Listening on port ${port}`));
