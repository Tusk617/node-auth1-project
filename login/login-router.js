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

router.post("/register", (req, res) => {

    const {username, password} = req.body;
    const rounds = process.env.HASH_ROUNDS || 8;
    const hash = bcrypt.hashSync(password, rounds);

    Users.add({username, password: hash})
    .then(user => {
        res.status(200).json(user)
    })
    .catch(err => {
        res.status(500).json(err.message)
        console.log(err)
    })
})

module.exports = router;