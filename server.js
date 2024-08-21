const jsonServer = require("json-server");
const express = require("express");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const app = express();
const PORT = 3000;

server.use(middlewares);

server.use((req, res, next) => {
  setTimeout(next, 500);
});

app.use("/api", server);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
