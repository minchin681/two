const express = require("express");
const cors = require("cors");
const port = 8080;
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("./client/build"))



app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on post ${port}`);
});
