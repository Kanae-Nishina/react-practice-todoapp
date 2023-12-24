const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const axios = require("axios");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", function (req, res) {
  try {
    const data = axios.post(
      req.body.url,
      {
        "text": req.body.text,
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    res.json({result: data});
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Listen...${port}`);
});