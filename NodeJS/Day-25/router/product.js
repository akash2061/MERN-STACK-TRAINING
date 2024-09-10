const express = require("express");

const router = express.router;

router.get("/products", (req, res) => { //! http://localhost:3000/api/products

});

router.post("/createProduct", (req, res) => { //! http://localhost:3000/api/createProduct

});

router.put("/updateProduct", (req, res) => { //! http://localhost:3000/api/updateProduct

});

router.delete("/deleteProduct", (req, res) => { //! http://localhost:3000/api/deleteProduct

});

module.exports = router;