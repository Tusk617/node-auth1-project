const express = require("express");
const server = express();

server.use(express.json());

const loginRouter = require("./login/login-router.js");

server.use("/api/login", loginRouter)

module.exports = server;
