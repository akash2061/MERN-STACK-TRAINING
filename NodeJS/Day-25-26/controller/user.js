const users = require("../user");

exports.getUser = (req, res) => {
    res.send({ message: "User Fetched", data: users });
};

exports.createUser = (req, res) => {
    const data = req.body;
    const modifiedData = { id: users.length + 1, ...data };
    users.push(modifiedData);
    res.send({ message: "User Created", data: data });
};

exports.updateUser = (req, res) => {
    // console.log(req.params);
    const { id } = req.params;
    let user = users.find(item => item.id === +id);
    if (!user) {
        return res.send({ message: "User not found!" });
    }
    user.contactDetails = req.body.contactDetails;
    // user = {...user, ...req, body};
    res.send({ message: "User Updated" });
};

exports.deleteUser = (req, res) => {
    const { id } = req.params;
    let user = users.find(item => item.id === +id);
    if (!user) {
        return res.send({ message: "User not found!" });
    }
    users.splice(user, 1);
    res.send({ message: "User deleted" });
};