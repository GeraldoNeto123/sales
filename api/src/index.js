const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("Hello world!");
});

const PORT = 3003;
const HOST = "0.0.0.0";

app.listen(PORT, HOST, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);
