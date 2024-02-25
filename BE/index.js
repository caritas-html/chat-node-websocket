const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username: username,
        secret: username,
        first_name: username,
      },
      {
        headers: { "private-key": "e5a35856-61a3-43fd-9de5-95143e9f0563" },
      }
    );

    return res.status(r.status).json(r.data);
  } catch (error) {
    console.log(error);
  }
});

app.listen(3001);
