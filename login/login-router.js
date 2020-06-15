const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();

const Users = require("./login-model.js");

router.get("/users", (req, res) => {
    Users.find()
    .then(users => {
        res.status(200).json(users);
    })
})

module.exports = router;