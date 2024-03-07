const express = require("express");
const cors = require("cors");
const port = 8080;
const app = express();
const path =require("path")


app.use(express.json());
app.use(cors());
app.use(express.static("./client/build"))


app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});


app.get("/hello", (req, res) => {
  res.send("hello from server!")
});


app.listen(port, () => {
  console.log(`Server is running yall!! on ${port}`);
});
