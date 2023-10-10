import express from "express";
import path from "path";
const app = express();
const port = 8080;
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/index.html"));
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
