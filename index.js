const express = require("express");
const app = express();
const port = 3333;

app.use(express.json());

app.post("/register", (req, res) => {
  console.log(req.body);
  res.send("User Registered");
});

app.get("*", (req, res) => {
  res.status(404).send({message: "404 not found"});
});

app.listen(port, () => {
  console.log(`server started and running on port ${port}`);
});
