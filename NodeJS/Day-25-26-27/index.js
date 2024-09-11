const express = require("express"); //! important
const userRoutes = require("./router/user")
const productRoutes = require("./router/product")
const app = express(); //! important

//! CRUD
app.use(express.json());

// const users = [
//     {
//         name: "Morningstar_2061"
//     }
// ];

// app.get("/getUser", (req, res) => {
//     res.send({ message: "USer Fetched", users: users })
// });

// app.post("/createUser", (req, res) => {
//     const data = req.body;
//     users.push(data);
//     res.send({ message: "USer Fetched", name: name })
// });

app.use("/api", userRoutes);
app.use("/api", productRoutes);

app.listen(3000, () => {
    console.log("Server is running on 3000");
});