const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/files", (req, res) => {
  try {
    const files = fs.readdirSync(".");
    res.json(files);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});
