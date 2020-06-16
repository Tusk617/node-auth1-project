const express = require("express");
const server = express();
const session = require("express-session");

const sessionConfig = {
    name: "session",
    secret: process.env.SESSION_SECRET || "No secret :(",
    cookie: {
        maxAge: 1000 * 60 * 10,
        secure: process.env.COOKIE_SECURE || false,
        httpOnly: true, 
    },
    resave: false,
    saveUninitialized: true
}

server.use(express.json());

server.use(session(sessionConfig));

const loginRouter = require("./login/login-router.js");

server.use("/api", loginRouter)

module.exports = server;
