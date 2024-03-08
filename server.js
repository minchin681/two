const express = require("express");
const cors = require("cors");
const port = 8080;
const app = express();
const path =require("path")
app.use(express.json());
app.use(cors());
app.use(express.static("./client/build"))



let testing = {
  data: "hello from the backend"
}

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});


app.post("/hello", (req, res) => {
  console.log("hello from server! hello!!")
});

app.get("/data", (req, res) => {
  res.json(testing)
})


app.listen(port, () => {
  console.log(`Server is running yall!! on ${port}`);
});
