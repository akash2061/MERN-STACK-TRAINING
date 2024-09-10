const express = require("express");
const users = require("../user");
const router = express.Router();

router.get("/users", (req, res) => { //! http://localhost:3000/api/users
    res.send({ message: "User Fetched", data: "users" });
});

router.post("/users", (req, res) => { //! http://localhost:3000/api/createUser
    const data = req.body;
    users.push(data);
    res.send({ message: "User Created", data: data });
});

router.put("/updateUser", (req, res) => { //! http://localhost:3000/api/updateUser
    
});

router.delete("/deleteUser", (req, res) => { //! http://localhost:3000/api/deleteUser

});

module.exports = router;