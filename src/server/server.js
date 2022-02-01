const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use("/login", (req, res) => {
  res.send({
    token: "test123",
  });
});
app.listen(8080, () =>
  console.log("API is running on http://localhost:8080/login")
);
// semplice server in node/express che consente di avviare il meccanismo di log in, da avviare in un terminale a parte, possibilmente, tramite il comando "node server.js"
