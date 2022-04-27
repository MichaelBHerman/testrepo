// require (import) express
const express = require("express");

//create an express server from the express function above
const server = express(); //server is currently deaf af, can't hear anything

const PORT = 3000;

server.listen();

server.listen(PORT, () => {
  console.log("server listening...");
});

server.get("/michael", (req, res) => {
  res.send("<h1>hi world</h1>");
});
