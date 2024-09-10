const express = require("express");
const users = require("../user");
const router = express.Router();

router.get("/users", (req, res) => { //! http://localhost:3000/api/users
    res.send({ message: "User Fetched", data: "users" });
});

router.post("/users", (req, res) => { //! http://localhost:3000/api/users
    const data = req.body;
    const modifyData = { id: users.length + 1, ...data };
    users.push(modifyData);
    res.send({ message: "User Created", data: data });
});

router.put("/users/:id", (req, res) => { //! http://localhost:3000/api/users
    // console.log(req.params);
    const { id } = req.params;
});

router.delete("/users", (req, res) => { //! http://localhost:3000/api/users

});

module.exports = router;